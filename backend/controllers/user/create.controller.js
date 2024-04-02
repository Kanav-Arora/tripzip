/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const {
    JwtSecret, JwtExpiresIn, NodeEnv, GoogleAuthClientID,
} = require('../../config');

const googleClient = new OAuth2Client(GoogleAuthClientID);
const logger = require('../../utils/logger/logger');
const { PasswordManager } = require('../../services/passwordManager');
const { ifUserExists, addNewUser } = require('./helper.controller');
const { AwsUserProfileImagesBucketName, S3ClientObject } = require('../../config');
const {
    sendWelcomeEmail,
} = require('../../utils/Nodemailer/NodemailerService');
const { createSubscriber } = require('../../utils/Novu/novuSubscriber');

async function signUpUser(req, res) {
    const user = req.body;

    try {
        if (!user.name || !user.email || !user.password) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const userExists = await ifUserExists(user.email);
        if (userExists) {
            return res.status(400).send({ message: 'User already exists' });
        }

        const savedUser = await addNewUser(user);

        const payload = {
            id: savedUser._id,
            name: savedUser.name,
            userDetailsId: savedUser.userDetails,
        };
        const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });

        const cookieOptions = {
            httpOnly: true,
            secure: NodeEnv === 'production',
            expires: new Date(Date.now() + 5184000000),
        };

        if (NodeEnv === 'production') {
            cookieOptions.domain = 'tripzip.online';
        }
        await sendWelcomeEmail(savedUser.email, savedUser.name);
        const occurenceIndex = payload.name.lastIndexOf(' ');
        let firstName = '';
        let lastName = '';
        if (occurenceIndex === -1) {
            firstName = payload.name;
            lastName = '';
        } else {
            firstName = payload.name.substring(0, occurenceIndex);
            lastName = payload.name.substring(occurenceIndex + 1);
        }
        const subscriberResponse = await createSubscriber(payload.id, {
            firstName,
            lastName,
            email: user.email,
        });

        if (subscriberResponse.status !== 201) {
            return res.status(400).send({ message: 'Unable to create subscriber for this' });
        }

        res.cookie('access_token', token, cookieOptions).status(201).json({
            uid: savedUser._id,
            name: savedUser.name,
            userDetailsId: savedUser.userDetails,
            isVerified: savedUser.isVerified,
        });

        return true;
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

async function signInUser(req, res) {
    const user = req.body;
    try {
        const userExists = await ifUserExists(user.email);
        if (!userExists) {
            return res.status(400).send({ message: "Email doesn't exists" });
        }

        const isPasswordCorrect = await PasswordManager.compare(
            userExists.password,
            user.password,
        );

        if (!isPasswordCorrect) {
            return res
                .status(400)
                .send({ message: 'Umm, Invalid credentials' });
        }

        const payload = {
            id: userExists._id,
            name: userExists.name,
            userDetailsId: userExists.userDetails,
        };
        const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
        const cookieOptions = {
            httpOnly: true,
            secure: NodeEnv === 'production',
            expires: new Date(Date.now() + 5184000000),
        };

        if (NodeEnv === 'production') {
            cookieOptions.domain = 'tripzip.online';
        }
        sendWelcomeEmail(userExists.email, userExists.name);
        res.cookie('access_token', token, cookieOptions).status(201).json({
            uid: userExists._id,
            name: userExists.name,
            userDetailsId: userExists.userDetails,
            isVerified: userExists.isVerified,
        });
    } catch (error) {
        logger.error(`Signin error: ${error}`);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

async function authWithGoogle(req, res) {
    const { idToken } = req.body;
    try {
        const ticket = await googleClient.verifyIdToken({
            idToken,
            audience: GoogleAuthClientID,
        });

        const authData = ticket.getPayload();

        const userExists = await ifUserExists(authData.email);
        let payload = {};

        if (userExists) {
            payload = {
                id: userExists._id,
                name: userExists.name,
                userDetailsId: userExists.userDetails,
            };
        } else {
            const newUser = {
                googleID: authData.sub,
                email: authData.email,
                name: authData.name,
                isGoogleAuth: true,
            };
            const savedUser = await addNewUser(newUser);
            payload = {
                id: savedUser._id,
                name: savedUser.name,
                userDetailsId: savedUser.userDetails,
            };
            if (authData.picture) {
                const { data, headers, status } = await axios.get(authData.picture, {
                    responseType: 'arraybuffer',
                });

                if (status === 200) {
                    const imageParams = {
                        Bucket: AwsUserProfileImagesBucketName,
                        Key: payload.id.toString(),
                        Body: Buffer.from(data, 'binary'),
                        ContentType: headers['content-type'],
                    };
                    await S3ClientObject.upload(imageParams).promise();
                }
            }
            const occurenceIndex = payload.name.lastIndexOf(' ');
            let firstName = '';
            let lastName = '';
            if (occurenceIndex === -1) {
                firstName = payload.name;
                lastName = '';
            } else {
                firstName = payload.name.substring(0, occurenceIndex - 1);
                lastName = payload.name.substring(occurenceIndex + 1);
            }
            const subscriberResponse = await createSubscriber(payload.id, {
                firstName,
                lastName,
                email: authData.email,
            });

            if (subscriberResponse.status !== 201) {
                return res.status(400).send({ message: 'Unable to create subscriber for this' });
            }
        }

        const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
        const cookieOptions = {
            httpOnly: true,
            secure: NodeEnv === 'production',
            expires: new Date(Date.now() + 5184000000),
        };

        if (NodeEnv === 'production') {
            cookieOptions.domain = 'tripzip.online';
        }

        res.cookie('access_token', token, cookieOptions).status(201).json({
            uid: payload.id,
            name: payload.name,
            userDetailsId: payload.userDetailsId,
        });
    } catch (error) {
        logger.error(`GoogleAuth error: ${error}`);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { signUpUser, signInUser, authWithGoogle };
