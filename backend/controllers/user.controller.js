import { sign } from "jsonwebtoken";

import { PasswordManager } from "../services/passwordManager";

import { ifUserExists, addNewUser } from "../models/user.model";

async function signUpUser(req, res) {
  const user = req.body;

  // validation
  try {
    if (!user.name || !user.email || !user.password) {
      return res.status(400).send({ message: "Invalid or missing params" });;
    }

    // Checking if user already exists
    const userExists = await ifUserExists(user);
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }

    // add new user
    const savedUser = await addNewUser(user);

    return res.status(201).json(savedUser._id);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error :(" });
  }
}

async function signInUser(req, res) {
  const user = req.body;
  try {
    const userExists = await ifUserExists(user);
    if (!userExists) {
      return res.status(400).send({ message: "Invalid Credentails" });
    }

    // verifying password with given and original
    const isPasswordCorrect = await PasswordManager.compare(
      userExists.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "Umm, Invalid credentials" });
    }

    // Generate token for user
    const payload = {
      id: userExists._id
    }
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json({
      u_id: userExists._id
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error :(" })
  }
}

async function signOutUser(req, res) {
  console.log("Signing you out, looking forward to see you again");
  res.clearCookie('access_token');
  res.status(200).json('Logout successful');
}

export default { signUpUser, signInUser, signOutUser };
