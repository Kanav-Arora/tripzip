/* eslint-disable max-len */
const Trips = require('../../models/trip.mongo');
const TripDetails = require('../../models/tripDetails.mongo');
const logger = require('../../utils/logger/logger');

async function deleteTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { tripID } = req.params;
        const stateUpdate = {
            status: 'deleted',
        };
        const tripResponse = await Trips.findByIdAndUpdate(tripID, stateUpdate, { new: true });
        if (!tripResponse) {
            throw new Error('Trip not found');
        }
        const tripDetailsResponse = await TripDetails.findByIdAndUpdate(tripResponse.tripDetails, stateUpdate, { new: true });

        if (!tripDetailsResponse) {
            throw new Error('Trip Details not found');
        }

        res.status(201).send({
            status: 204,
            message: 'Trip deleted',
        });
    } catch (error) {
        logger.error(error);
        if (error.message === 'Trip not found' || error.message === 'Trip Details not found') {
            res.status(404).send({
                status: 404,
                message: error.message,
            });
        } else {
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error',
            });
        }
    }
}

module.exports = deleteTrip;
