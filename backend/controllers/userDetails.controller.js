const userDetailSchema = require('../models/userDetails.mongo');
const logger = require('../utils/logger/logger');

async function getUserDetails(req, res) {
    const uid = req.headers['x-uid'];
    if (req.isAuth === false || req.user.id !== uid) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        userDetailSchema.findOne({ uid })
            .then((userDetails) => {
                if (userDetails) {
                    const data = {
                        uid: userDetails.uid,
                        address: userDetails.address,
                        pincode: userDetails,
                        city: userDetails.city,
                        state: userDetails.state,
                        country: userDetails.country,
                        age: userDetails.age,
                        gender: userDetails.gender,
                        tripsCreated: userDetails.tripsCreated,
                        tripsInterested: userDetails.tripsInterested,
                        status: userDetails.status,
                    };
                    res.status(200).json(data);
                } else {
                    logger.warn(`UserDetails not found: ${uid}`);
                    return res.status(404).send({ message: 'Data not found' });
                }
            });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

const checkIfUidExists = async (uid) => {
    try {
        const user = await userDetailSchema.findOne({ uid });
        return !!user;
    } catch (error) {
        logger.error(error);
        return false;
    }
};

async function postUserDetails(req, res) {
    const uid = req.headers['x-uid'];
    if (req.isAuth === false || req.user.id !== uid) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    const userDetails = req.body;
    userDetails.uid = uid;
    userDetails.updatedAt = new Date();
    try {
        const exists = await checkIfUidExists(uid);
        if (exists === true) {
            await userDetailSchema.updateOne({ uid }, { $set: userDetails });
            res.status(201).send({ message: `UserDetails overwritten ${uid}` });
        } else {
            await userDetailSchema.create(userDetails);
            res.status(201).send({ message: `UserDetails created ${uid}` });
        }
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { getUserDetails, postUserDetails };
