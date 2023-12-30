/* eslint-disable max-len */
const { ObjectId } = require('mongodb');
const Trips = require('../../models/trip.mongo');
const logger = require('../../utils/logger/logger');

async function countTrips(req, res) {
    try {
        const {
            fromDate, toDate, location, uid,
        } = req.query;

        const filter = {
            status: 'active',
        };

        if (uid) {
            filter.createdBy = new ObjectId(uid);
        }

        if (location || fromDate || toDate) {
            const populatedTripDetailsFilter = {};

            if (location) {
                populatedTripDetailsFilter['populatedTripDetails.city'] = location.replace(/-/g, ' ');
            }
            if (fromDate) {
                populatedTripDetailsFilter['populatedTripDetails.startDate'] = {
                    $gte: new Date(fromDate),
                };
            }
            if (toDate) {
                populatedTripDetailsFilter['populatedTripDetails.endDate'] = {
                    $lte: new Date(toDate),
                };
            }

            filter.$and = Object.keys(populatedTripDetailsFilter).map(
                (key) => ({
                    [key]: populatedTripDetailsFilter[key],
                }),
            );
        }

        const response = await Trips.aggregate([
            {
                $lookup: {
                    from: 'tripdetails',
                    localField: 'tripDetails',
                    foreignField: '_id',
                    as: 'populatedTripDetails',
                },
            },
            {
                $addFields: {
                    populatedTripDetails: {
                        $arrayElemAt: ['$populatedTripDetails', 0],
                    },
                },
            },
            {
                $match: filter,
            },
            { $count: 'tripsCount' },
        ]);

        const { tripsCount } = response[0];

        res.status(200).json({
            status: 200,
            message: 'Trips Results Fetched successfully',
            data: { tripsCount },
        });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function filteredTrips(req, res) {
    try {
        const {
            fromDate, toDate, location, uid,
        } = req.query;

        const page = req.query.page || 1;
        const limit = req.body.limit || 9;

        const startIndex = (page - 1) * limit;

        const filter = {
            status: 'active',
        };

        if (uid) {
            filter.createdBy = new ObjectId(uid);
        }

        if (location || fromDate || toDate) {
            const tripDetailsFilter = {};

            if (location) {
                tripDetailsFilter['tripDetails.city'] = location.replace(
                    /-/g,
                    ' ',
                );
            }
            if (fromDate) {
                tripDetailsFilter['tripDetails.startDate'] = {
                    $gte: new Date(fromDate),
                };
            }
            if (toDate) {
                tripDetailsFilter['tripDetails.endDate'] = {
                    $lte: new Date(toDate),
                };
            }

            filter.$and = Object.keys(tripDetailsFilter).map((key) => ({
                [key]: tripDetailsFilter[key],
            }));
        }

        const response = await Trips.aggregate([
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
                $match: filter,
            },
            {
                $sort: { views: -1 },
            },
            {
                $skip: startIndex,
            },
            {
                $limit: limit,
            },
        ]);

        res.status(200).json({
            status: 200,
            message: 'Trips fetched successfully',
            data: { trips: response },
        });
    } catch (error) {
        logger.error(`Filtered trips${error}`);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function fetchTripByID(req, res) {
    try {
        const { tripID } = req.params;
        const updatedTrip = await Trips.findOneAndUpdate(
            { _id: tripID },
            { $inc: { views: 1 } },
            { new: true },
        ).populate('tripDetails');
        if (!updatedTrip) {
            res.status(404).json({
                status: 404,
                message: `No trip found for TripId: ${tripID}`,
            });
        } else {
            res.status(200).json({
                status: 200,
                message: 'Trips fetched successfully',
                data: updatedTrip,
            });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function fetchTrending(req, res) {
    try {
        const trendingTrips = await Trips.find().sort({ views: -1 }).limit(3).populate('tripDetails')
            .exec();
        if (!trendingTrips || trendingTrips.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Trending trips not found',
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Trending Trips fetched successfully',
            data: trendingTrips,
        });
    } catch (error) {
        logger.error(error.response.data, 'Trips-fetchTrending');

        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error:)',
            error: error.response.data,
        });
    }
}

module.exports = {
    countTrips, filteredTrips, fetchTripByID, fetchTrending,
};
