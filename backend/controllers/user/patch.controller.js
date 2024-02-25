const logger = require('../../utils/logger/logger');
const User = require('../../models/user.mongo');
const { PasswordManager } = require('../../services/passwordManager');

async function signOutUser(req, res) {
    res.clearCookie('access_token', { domain: 'localhost' });
    res.status(200).json('Logout successful');
}

async function changePassword(req, res) {
    try {
        const { email, password } = req.body;
        const hashedPassword = await PasswordManager.toHash(password);
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { password: hashedPassword } },
            { new: true },
        );

        if (updatedUser) {
            res.status(201).json({ status: 201, message: 'Password updated successfully' });
        } else {
            res.status(404).json({ status: 404, message: 'User not found' });
        }
    } catch (error) {
        logger.error(`Change Password: ${error}`);
        res.status(500).json({ status: 500, message: 'Internal server error' });
    }
}

module.exports = { signOutUser, changePassword };
