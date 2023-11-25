const bodyParser = require('body-parser');
const { Router } = require('express');

const createTrip = require('../controllers/trips/create.controller');
const deleteTrip = require('../controllers/trips/delete.controller');
const { countTrips, filteredTrips, fetchTripByID } = require('../controllers/trips/fetch.controller');
const { toggleInterestedTrip } = require('../controllers/trips/patch.controller');

const tripsRouter = Router();

tripsRouter.use(bodyParser.json());
tripsRouter.use(bodyParser.urlencoded({ extended: true }));

tripsRouter.post('/', createTrip);
tripsRouter.delete('/:tripID', deleteTrip);

tripsRouter.get('/', filteredTrips);
tripsRouter.get('/results', countTrips);
tripsRouter.get('/:tripID', fetchTripByID);

tripsRouter.patch('/interested/:tripID', toggleInterestedTrip);

module.exports = tripsRouter;
