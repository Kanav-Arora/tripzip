const { Router } = require('express');
const bodyParser = require('body-parser');

const { getUserDetails, postUserDetails } = require('../controllers/userDetails.controller');

const userDetailsRouter = Router();

userDetailsRouter.use(bodyParser.json());
userDetailsRouter.use(bodyParser.urlencoded({ extended: true }));

userDetailsRouter.get('/', getUserDetails);
userDetailsRouter.post('/', postUserDetails);

module.exports = userDetailsRouter;
