const bodyParser = require('body-parser');
const { Router } = require('express');

const { getUserDetails, postUserDetails } = require('../controllers/userDetails.controller');

const userDetailsRouter = Router();

userDetailsRouter.use(bodyParser.json());
userDetailsRouter.use(bodyParser.urlencoded({ extended: true }));

userDetailsRouter.get('/', getUserDetails);
userDetailsRouter.get('/:uid', getUserDetails);
userDetailsRouter.post('/', postUserDetails);

module.exports = userDetailsRouter;
