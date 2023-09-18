const express = require("express");

const userRouter = express.Router();

const {
	signUpUser,
	signInUser,
	signOutUser,
} = require("../controllers/user.controller");

userRouter.post("/signup", signUpUser);
userRouter.post("/signin", signInUser);
userRouter.post("/signout", signOutUser);

module.exports = userRouter;
