const logger = require('../../utils/logger/logger');
const Trips = require('../../models/trip.mongo');

async function filteredTrips(req, res) {
    try {
        const {
            startDate, endDate, destination, uid,
        } = req.query;

        const filter = {
            status: 'active',
        };
        if (uid) {
            filter.createdBy = uid;
        }
        if (destination) {
            filter.tripDetails.city = destination.replace(/-/g, ' ');
        }
        if (startDate) {
            filter.tripDetails.startDate = { $gte: new Date(startDate) };
        }
        if (endDate) {
            filter.tripDetails.endDate = { $lte: new Date(endDate) };
        }

        const trips = await Trips.find(filter).populate('tripDetails');
        res.status(200).json({
            status: 200,
            message: 'Trips fetched successfully',
            data: trips,
        });
    } catch (error) {
        logger.error(error);
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
        res.status(200).json({
            status: 200,
            message: 'Trips fetched successfully',
            data: updatedTrip,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { filteredTrips, fetchTripByID };
