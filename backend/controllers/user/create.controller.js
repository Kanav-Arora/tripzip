const jwt = require('jsonwebtoken');

const { JwtSecret, JwtExpiresIn, NodeEnv } = require('../../config');

const logger = require('../../utils/logger/logger');
const { PasswordManager } = require('../../services/passwordManager');

const { ifUserExists, addNewUser } = require('./helper.controller');

async function signUpUser(req, res) {
    const user = req.body;

    try {
        if (!user.name || !user.email || !user.password) {
            return res.status(400).send({ message: 'Invalid or missing params' });
        }

        const userExists = await ifUserExists(user);
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
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: NodeEnv !== 'development',
            expires: new Date(Date.now() + (5184000)),
        }).status(201).json({
            uid: savedUser._id,
            name: savedUser.name,
            userDetailsId: savedUser.userDetails,
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
        const userExists = await ifUserExists(user);
        if (!userExists) {
            return res.status(400).send({ message: 'Invalid Credentails' });
        }

        const isPasswordCorrect = await PasswordManager.compare(
            userExists.password,
            user.password,
        );

        if (!isPasswordCorrect) {
            return res.status(400).send({ message: 'Umm, Invalid credentials' });
        }

        const payload = {
            id: userExists._id,
            name: userExists.name,
            userDetailsId: userExists.userDetails,
        };
        const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: NodeEnv !== 'development',
            expires: new Date(Date.now() + (5184000)),
        }).status(201).json({
            uid: userExists._id,
            name: userExists.name,
            userDetailsId: userExists.userDetails,
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { signUpUser, signInUser };
