const jwt = require("jsonwebtoken");
const { PasswordManager } = require("../services/passwordManager");

const { ifUserExists, addNewUser } = require("../models/user.model");

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
      return res.status(400).send({ message: "Oops, Invalid Credentails" });
    }

    // verifying password with given and original
    const isPasswordCorrect = await PasswordManager.compare(
      userExists.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "Umm, Invalid cfredentials" });
    }

    // Generate token for user
    const payload = {
      id: userExists._id
    }
    const token = jwt.sign(payload, 'secret', { expiresIn: '1d' });
    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json({
      username: userExists.username
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
