const bodyParser = require('body-parser');
const { Router } = require('express');

const { getUserDetails, postUserDetails } = require('../controllers/userDetails/userDetails.controller');
const { fetchOngoingTrips, fetchCompletedTrips, fetchInterestedTrips } = require('../controllers/userDetails/fetch.controller');

const userDetailsRouter = Router();

userDetailsRouter.use(bodyParser.json());
userDetailsRouter.use(bodyParser.urlencoded({ extended: true }));

userDetailsRouter.get('/', getUserDetails);
userDetailsRouter.get('/:uid', getUserDetails);

userDetailsRouter.get('/:uid/trips/ongoing', fetchOngoingTrips);
userDetailsRouter.get('/:uid/trips/completed', fetchCompletedTrips);
userDetailsRouter.get('/:uid/trips/interested', fetchInterestedTrips);

userDetailsRouter.post('/', postUserDetails);

module.exports = userDetailsRouter;
