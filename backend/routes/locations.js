const { Router } = require('express');
const bodyParser = require('body-parser');

const {
  fetchLocations,
} = require('../controllers/locations/fetch.controller');

const locationRouter = Router();
locationRouter.use(bodyParser.json());
locationRouter.use(bodyParser.urlencoded({ extended: true }));

locationRouter.get('/', fetchLocations);

module.exports = locationRouter;
