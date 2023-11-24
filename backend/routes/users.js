const bodyParser = require('body-parser');
const { Router } = require('express');

const {
    signUpUser,
    signInUser,
} = require('../controllers/user/create.controller');

const { signOutUser } = require('../controllers/user/patch.controller');
const { userData } = require('../controllers/user/fetch.controller');

const userRouter = Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true }));

userRouter.post('/signup', signUpUser);
userRouter.post('/signin', signInUser);
userRouter.post('/signout', signOutUser);

userRouter.get('/userdata/:userID', userData);

module.exports = userRouter;
