/* eslint-disable max-len */
const Users = require('../../models/user.mongo');
const UserDetails = require('../../models/userDetails.mongo');
const logger = require('../../utils/logger/logger');

async function postUserDetails(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { uid } = req.user;
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

module.exports = { postUserDetails };
