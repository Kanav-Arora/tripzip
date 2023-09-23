import { signUpUser, signInUser, signOutUser } from "../controllers/user.controller";

import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", signUpUser);
userRouter.post("/signin", signInUser);
userRouter.post("/signout", signOutUser);

export default userRouter;
