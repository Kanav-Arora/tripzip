const bodyParser = require('body-parser');
const { Router } = require('express');

const {
    signUpUser,
    signInUser,
    signOutUser,
} = require('../controllers/user.controller');

const userRouter = Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true }));

userRouter.post('/signup', signUpUser);
userRouter.post('/signin', signInUser);
userRouter.post('/signout', signOutUser);

module.exports = userRouter;
