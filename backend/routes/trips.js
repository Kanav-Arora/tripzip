const { Router } = require('express');
const bodyParser = require('body-parser');

const createTrip = require('../controllers/trips/create.controller');
const deleteTrip = require('../controllers/trips/delete.controller');
const { filteredTrips, fetchTripByID } = require('../controllers/trips/fetch.controller');

const tripsRouter = Router();

tripsRouter.use(bodyParser.json());
tripsRouter.use(bodyParser.urlencoded({ extended: true }));

tripsRouter.post('/', createTrip);
tripsRouter.delete('/:tripID', deleteTrip);

tripsRouter.get('/', filteredTrips);
tripsRouter.get('/:tripID', fetchTripByID);

module.exports = tripsRouter;
