const usersDatabase = require('./user.mongo');
const { PasswordManager } = require('../services/passwordManager');
const logger = require('../utils/logger/logger');

async function ifUserExists(user) {
  const existingUser = await usersDatabase.findOne({ email: user.email });
  return existingUser;
}

async function addNewUser(user) {
  try {
    const hashedPassword = await PasswordManager.toHash(user.password);
    const newUser = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
    };
    const savedUser = await usersDatabase.create(newUser);
    logger.debug(savedUser);
    return savedUser;
  } catch (error) {
    logger.error(`Couldn't save the user ${error}`);
  }
}

module.exports = { ifUserExists, addNewUser };
