const Trips = require('../../models/trip.mongo');
const TripDetails = require('../../models/tripDetails.mongo');
const logger = require('../../utils/logger/logger');

async function createTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const tripDetailsResponse = await TripDetails.create(req.body);
        const tripData = {
            tripDetails: tripDetailsResponse._id,
            createdBy: req.user.id,
        };
        const tripResponse = await Trips.create(tripData);
        res.status(201).send({
            status: 201,
            message: 'Trip created',
            _id: tripResponse._id,
            detailId: tripDetailsResponse._id,
        });
    } catch (error) {
        logger.error(error);
    }
}

module.exports = createTrip;
