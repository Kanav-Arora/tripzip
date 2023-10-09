const jwt = require('jsonwebtoken');

const { JwtSecret, JwtExpiresIn } = require('../config');
const logger = require('../utils/logger/logger');
const { PasswordManager } = require('../services/passwordManager');
const { ifUserExists, addNewUser } = require('../models/user.model');

async function signUpUser(req, res) {
  const user = req.body;
  // validation
  try {
    if (!user.name || !user.email || !user.password) {
      return res.status(400).send({ message: 'Invalid or missing params' });
    }

    // Checking if user already exists
    const userExists = await ifUserExists(user);
    if (userExists) {
      return res.status(400).send({ message: 'User already exists' });
    }

    // add new user
    const savedUser = await addNewUser(user);

    // Generate token for user
    const payload = {
      id: savedUser._id,
      name: savedUser.name,
    };
    const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(Date.now() + (5184000)),
    }).status(201).json({
      uid: savedUser._id,
      name: savedUser.name,
    });

    return true;
  } catch (error) {
    logger.error(error);
    return res.status(500).send({ message: 'Internal Server Error :(' });
  }
}

async function signInUser(req, res) {
  const user = req.body;
  try {
    const userExists = await ifUserExists(user);
    if (!userExists) {
      return res.status(400).send({ message: 'Invalid Credentails' });
    }

    // verifying password with given and original
    const isPasswordCorrect = await PasswordManager.compare(
      userExists.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      return res.status(400).send({ message: 'Umm, Invalid credentials' });
    }

    // Generate token for user
    const payload = {
      id: userExists._id,
      name: userExists.name,
    };
    const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(Date.now() + (5184000)),
    }).status(201).json({
      uid: userExists._id,
      name: userExists.name,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).send({ message: 'Internal Server Error :(' });
  }
}

async function signOutUser(req, res) {
  res.clearCookie('access_token');
  res.status(200).json('Logout successful');
}

module.exports = { signUpUser, signInUser, signOutUser };
