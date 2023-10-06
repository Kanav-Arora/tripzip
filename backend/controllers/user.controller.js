const jwt = require("jsonwebtoken");
const { PasswordManager } = require("../services/passwordManager");

const { ifUserExists, addNewUser } = require("../models/user.model");

const { jwt_scret, jwt_expires_in } = require("../config")

async function signUpUser(req, res) {
  const user = req.body;
  // validation
  try {
    if (!user.name || !user.email || !user.password) {
      return res.status(400).send({ message: "Invalid or missing params" });
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
      id: userExists._id,
      name: userExists.name,
    }
    const token = jwt.sign(payload, jwt_scret, { expiresIn: jwt_expires_in });
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: false,
      SameSite: 'None',
      expires: new Date(Date.now() + (5184000)),
    }).status(200).json({
      uid: userExists._id,
      name: userExists.name
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

module.exports = { signUpUser, signInUser, signOutUser };
