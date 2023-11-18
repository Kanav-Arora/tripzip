/* eslint-disable max-len */
const UserDetails = require('../models/userDetails.mongo');
const Users = require('../models/user.mongo');
const logger = require('../utils/logger/logger');

async function getUserDetails(req, res) {
    let uid;
    if (req.route.path === '/') {
        uid = req.user.id;
    } else if (req.route.path === '/:uid') {
        uid = req.params.uid;
    }
    try {
        const user = await Users.findById(uid);
        const userDetailRef = user.userDetails;
        UserDetails.findById(userDetailRef).then((userDetails) => {
            if (userDetails) {
                res.status(200).send({
                    status: 200,
                    message: 'User Details Fetched',
                    data: userDetails,
                });
            } else {
                logger.warn(`UserDetails not found: ${uid}`);
                return res.status(404).send({
                    status: 404,
                    message: 'Data not found',
                });
            }
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

async function postUserDetails(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const uid = req.user.id;
        const userDetails = req.body;
        userDetails.updatedAt = new Date();
        const user = await Users.findById(uid);
        const userDetailRef = user.userDetails;
        const updatedUserDetails = await UserDetails.findByIdAndUpdate(
            userDetailRef,
            userDetails,
            { new: true },
        );
        res.status(201).send({
            status: 201,
            message: 'User Details overwritten',
            _id: user._id,
            detailId: updatedUserDetails._id,
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { getUserDetails, postUserDetails };
