const { Router } = require('express');
const bodyParser = require('body-parser');

const {
    verifyEmailID,
    verifyEmailCode,
} = require('../controllers/emailVerification/create.controller');

const emailVerifyRouter = Router();
emailVerifyRouter.use(bodyParser.json());
emailVerifyRouter.use(bodyParser.urlencoded({ extended: true }));

emailVerifyRouter.get('/', verifyEmailID);
emailVerifyRouter.post('/', verifyEmailCode);

module.exports = emailVerifyRouter;
