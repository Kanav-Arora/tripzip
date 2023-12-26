const logger = require('../../utils/logger/logger');

const UserDetails = require('../../models/userDetails.mongo');
const Trips = require('../../models/trip.mongo');

async function toggleInterestedTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { uid } = req.user;
        const { userDetailsId } = req.user;
        const tripId = req.params.tripID;
        const userDetails = await UserDetails.findById(userDetailsId);

        if (!userDetails) {
            return res.status(404).send({ message: 'UserDetails not found' });
        }
        const indexOfTrip = userDetails.tripsInterested.indexOf(tripId);

        if (indexOfTrip === -1) {
            userDetails.tripsInterested.push(tripId);

            await Trips.findByIdAndUpdate(
                tripId,
                { $push: { tripsInterested: uid } },
                { new: true },
            );
        } else {
            userDetails.tripsInterested.splice(indexOfTrip, 1);

            await Trips.findByIdAndUpdate(
                tripId,
                { $pull: { tripsInterested: uid } },
                { new: true },
            );
        }

        await userDetails.save();

        res.status(201).send({ status: 201, message: 'Trip interest toggled successfully' });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { toggleInterestedTrip };
