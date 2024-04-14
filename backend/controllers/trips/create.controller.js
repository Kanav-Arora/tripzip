const Trips = require('../../models/trip.mongo');
const TripDetails = require('../../models/tripDetails.mongo');
const User = require('../../models/user.mongo');
const { requestTripNovu, tripPlainNotificationNovu } = require('../../utils/Novu/novuTrigger');
const logger = require('../../utils/logger/logger');

async function createTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const tripDetailsResponse = await TripDetails.create(req.body);
        const tripData = {
            tripDetails: tripDetailsResponse._id,
            createdBy: req.user.uid,
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
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function requestTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { tripID } = req.params;
        if (!tripID) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const tripData = await Trips.findByIdAndUpdate(
            tripID,
            { $push: { peopleRequested: req.user.uid } },
            { new: true },
        ).populate('tripDetails');
        const createdById = tripData.createdBy.toString();
        const tripTitle = tripData.tripDetails.title;
        if (createdById) {
            const response = await requestTripNovu(
                createdById,
                tripID,
                tripTitle,
                req.user.uid,
                req.user.name,
            );
            if (response.status === 201) {
                res.status(201).send({
                    status: 201,
                    message: 'Trip requested',
                    requestorId: req.user.uid,
                    approvorId: createdById,
                });
            }
        } else {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function tripRequestResponse(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { tripID, uid, approved } = req.query;
        if (!tripID || !uid || !approved) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const tripData = approved === 'true' ? await Trips.findByIdAndUpdate(
            tripID,
            {
                $pull: { peopleRequested: uid },
                $push: { peopleGoing: uid },
            },
            { new: true },
        ).populate('tripDetails')
            : await Trips.findByIdAndUpdate(
                tripID,
                {
                    $pull: { peopleRequested: uid },
                },
                { new: true },
            ).populate('tripDetails');

        const createdById = tripData.createdBy.toString();

        if (createdById) {
            const tripTitle = tripData.tripDetails.title;
            const userDataResponse = await User.findById(createdById, { name: 1 });
            const tripOwnerName = userDataResponse.name;
            if (tripOwnerName) {
                const response = await tripPlainNotificationNovu(
                    uid,
                    tripID,
                    tripTitle,
                    createdById,
                    tripOwnerName,
                    approved,
                );
                if (response.status === 201) {
                    return res.status(201).send({
                        status: 201,
                        message: `${createdById} has responded to ${uid} where approved = ${approved}`,
                        requestorId: uid,
                        approvorId: createdById,
                        approvalStatus: approved,
                    });
                }
            }
        } else {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function leaveTrip(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { tripID } = req.params;
        if (!tripID) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const tripData = await Trips.findByIdAndUpdate(
            tripID,
            { $pull: { peopleGoing: req.user.uid } },
            { new: true },
        ).populate('tripDetails');

        const createdById = tripData.createdBy.toString();

        res.status(201).send({
            status: 201,
            message: 'Trip left',
            tripId: tripID,
            requestorId: req.user.uid,
            approvorId: createdById,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

async function cancelTripRequest(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
    }
    try {
        const { tripID } = req.params;
        if (!tripID) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const tripData = await Trips.findByIdAndUpdate(
            tripID,
            { $pull: { peopleRequested: req.user.uid } },
            { new: true },
        ).populate('tripDetails');

        const createdById = tripData.createdBy.toString();

        res.status(201).send({
            status: 201,
            message: 'Trip Request Cancelled',
            tripId: tripID,
            requestorId: req.user.uid,
            approvorId: createdById,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = {
    createTrip, requestTrip, tripRequestResponse, leaveTrip, cancelTripRequest,
};
