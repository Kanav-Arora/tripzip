const bodyParser = require('body-parser');
const { Router } = require('express');

const {
    fetchOngoingTrips, fetchCompletedTrips, fetchInterestedTrips, getUserDetails,
} = require('../controllers/userDetails/fetch.controller');
const { postUserDetails } = require('../controllers/userDetails/post.controller');
const { deleteUser } = require('../controllers/userDetails/delete.controller');

const userDetailsRouter = Router();

userDetailsRouter.use(bodyParser.json());
userDetailsRouter.use(bodyParser.urlencoded({ extended: true }));

userDetailsRouter.get('/', getUserDetails);
userDetailsRouter.get('/:uid', getUserDetails);

userDetailsRouter.delete('/', deleteUser);

userDetailsRouter.get('/:uid/trips/ongoing', fetchOngoingTrips);
userDetailsRouter.get('/:uid/trips/completed', fetchCompletedTrips);
userDetailsRouter.get('/:uid/trips/interested', fetchInterestedTrips);

userDetailsRouter.post('/', postUserDetails);

module.exports = userDetailsRouter;
