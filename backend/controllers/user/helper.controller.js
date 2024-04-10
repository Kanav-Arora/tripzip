const Users = require('../../models/user.mongo');
const UserDetails = require('../../models/userDetails.mongo');
const { PasswordManager } = require('../../services/passwordManager');
const logger = require('../../utils/logger/logger');

async function ifUserExists(userEmail) {
    const existingUser = await Users.findOne({ email: userEmail });
    return existingUser;
}

async function addNewUser(user) {
    try {
        const userDetailInputs = {};
        if (user.image) {
            userDetailInputs.image = user.image;
        }
        const userDetailResponse = await UserDetails.create(userDetailInputs);
        const newUser = {
            userDetails: userDetailResponse._id,
            email: user.email,
            name: user.name,
            isGoogleAuth: user.isGoogleAuth,
            isVerified: user.isVerified,
        };
        if (user.isGoogleAuth) {
            newUser.googleID = user.googleID;
        } else {
            const hashedPassword = await PasswordManager.toHash(user.password);
            newUser.password = hashedPassword;
        }
        const savedUser = await Users.create(newUser);
        return savedUser;
    } catch (error) {
        logger.error(`Couldn't save the user ${error}`);
    }
}

async function deleteUser(userId, userDetailsId) {
    const deletedUserDetails = await UserDetails.findByIdAndDelete(userDetailsId);
    if (!deletedUserDetails) {
        return null;
    }
    const deletedUser = await Users.findByIdAndDelete(userId);
    if (!deletedUser) {
        return null;
    }
    return { deletedUser, deletedUserDetails };
}

module.exports = { ifUserExists, addNewUser, deleteUser };
