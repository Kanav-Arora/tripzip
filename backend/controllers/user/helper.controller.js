const Users = require('../../models/user.mongo');
const UserDetails = require('../../models/userDetails.mongo');
const { PasswordManager } = require('../../services/passwordManager');
const logger = require('../../utils/logger/logger');

async function ifUserExists(user) {
    const existingUser = await Users.findOne({ email: user.email });
    return existingUser;
}

async function addNewUser(user) {
    try {
        const hashedPassword = await PasswordManager.toHash(user.password);
        const userDetailResponse = await UserDetails.create({});
        const newUser = {
            userDetails: userDetailResponse._id,
            email: user.email,
            password: hashedPassword,
            name: user.name,
        };
        const savedUser = await Users.create(newUser);
        return savedUser;
    } catch (error) {
        logger.error(`Couldn't save the user ${error}`);
    }
}

module.exports = { ifUserExists, addNewUser };
