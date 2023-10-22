const { Router } = require('express');
const bodyParser = require('body-parser');

const createTrip = require('../controllers/trips/create.controller');

const tripsRouter = Router();

tripsRouter.use(bodyParser.json());
tripsRouter.use(bodyParser.urlencoded({ extended: true }));

tripsRouter.get('/', createTrip);

module.exports = tripsRouter;
