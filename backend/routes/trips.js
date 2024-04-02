const bodyParser = require('body-parser');
const { Router } = require('express');

const { createTrip, requestTrip, tripRequestResponse } = require('../controllers/trips/create.controller');
const deleteTrip = require('../controllers/trips/delete.controller');
const {
    countTrips, filteredTrips, fetchTripByID, fetchTrending,
} = require('../controllers/trips/fetch.controller');
const { toggleInterestedTrip } = require('../controllers/trips/patch.controller');

const tripsRouter = Router();

tripsRouter.use(bodyParser.json());
tripsRouter.use(bodyParser.urlencoded({ extended: true }));

tripsRouter.post('/', createTrip);
tripsRouter.post('/request-trip/:tripID', requestTrip);
tripsRouter.post('/accept-trip', tripRequestResponse);

tripsRouter.delete('/:tripID', deleteTrip);

tripsRouter.get('/', filteredTrips);
tripsRouter.get('/trendingTrips', fetchTrending);
tripsRouter.get('/results', countTrips);
tripsRouter.get('/:tripID', fetchTripByID);

tripsRouter.patch('/interested/:tripID', toggleInterestedTrip);

module.exports = tripsRouter;
