const Users = require('../../models/user.mongo');
const Trips = require('../../models/trip.mongo');
const logger = require('../../utils/logger/logger');
const UserDetails = require('../../models/userDetails.mongo');

async function fetchOngoingTrips(req, res) {
    try {
        const { uid } = req.params;
        const user = await Users.findOne({ _id: uid })
            .populate('userDetails')
            .exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const tripIDs = user.userDetails.tripsCreated;

        const ongoingTrips = await Trips.aggregate([
            {
                $match: {
                    _id: { $in: tripIDs },
                },
            },
            {
                $lookup: {
                    from: 'tripdetails',
                    localField: 'tripDetails',
                    foreignField: '_id',
                    as: 'tripDetails',
                },
            },
            {
                $addFields: {
                    tripDetails: { $arrayElemAt: ['$tripDetails', 0] },
                },
            },
            {
                $match: {
                    $expr: {
                        $and: [
                            { $lte: ['$tripDetails.startDate', new Date()] },
                            { $gte: ['$tripDetails.endDate', new Date()] },
                        ],
                    },
                },
            },
        ]);

        return res.status(200).json({
            status: 200,
            message: 'Ongoing Trips fetched For Account successfully',
            data: ongoingTrips,
        });
    } catch (error) {
        logger.error(error.response, 'Trips-Fetching Ongoing Trips For User');

        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error:)',
            error: error.response,
        });
    }
}

async function fetchCompletedTrips(req, res) {
    try {
        const { uid } = req.params;
        const user = await Users.findOne({ _id: uid })
            .populate('userDetails')
            .exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        logger.error(error.response, 'Trips-Fetching For User');

        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error:)',
            error: error.response,
        });
    }
}

async function fetchInterestedTrips(req, res) {
    try {
        const { uid } = req.params;
        const user = await Users.findOne({ _id: uid })
            .populate('userDetails')
            .exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const tripIDs = user.userDetails.tripsInterested;

        const interestedTrips = await Trips.aggregate([
            {
                $match: {
                    _id: { $in: tripIDs },
                },
            },
            {
                $lookup: {
                    from: 'tripdetails',
                    localField: 'tripDetails',
                    foreignField: '_id',
                    as: 'tripDetails',
                },
            },
            {
                $addFields: {
                    tripDetails: { $arrayElemAt: ['$tripDetails', 0] },
                },
            },
        ]);

        return res.status(200).json({
            status: 200,
            message: 'Interested Trips fetched For Account successfully',
            data: interestedTrips,
        });
    } catch (error) {
        logger.error(error.response, 'Trips-Fetching For User');

        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error:)',
            error: error.response,
        });
    }
}

async function getUserDetails(req, res) {
    let uid;
    if (req.route.path === '/') {
        if (!req.isAuth) {
            return res.status(401).send({ message: 'Unauthorised access' });
        }
        uid = req.user.uid;
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

module.exports = {
    fetchOngoingTrips,
    fetchCompletedTrips,
    fetchInterestedTrips,
    getUserDetails,
};
