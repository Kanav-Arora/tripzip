const { Router } = require('express');
const bodyParser = require('body-parser');

const {
    verifyPasswordID,
    verifyPasswordCode,
} = require('../controllers/passwordVerification/create.controller');

const passwordVerifyRouter = Router();
passwordVerifyRouter.use(bodyParser.json());
passwordVerifyRouter.use(bodyParser.urlencoded({ extended: true }));

passwordVerifyRouter.get('/', verifyPasswordID);
passwordVerifyRouter.post('/', verifyPasswordCode);

module.exports = passwordVerifyRouter;
