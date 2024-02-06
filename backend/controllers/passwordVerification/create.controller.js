const PasswordVerify = require('../../models/passwordVerification.mongo');
const {
    sendPasswordVerificationEmail,
} = require('../../utils/Nodemailer/NodemailerService');
const logger = require('../../utils/logger/logger');

function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

async function verifyPasswordID(req, res) {
    try {
        const { email } = req.query;

        const existingVerification = await PasswordVerify.findOne({ email });
        if (existingVerification) {
            const currentTime = new Date();
            const creationTime = existingVerification.created_at;
            const timeDifference = currentTime - creationTime;
            if (timeDifference < 120000) {
                const remainingTime = Math.ceil(
                    (120000 - timeDifference) / 1000,
                );
                return res.status(200).json({
                    status: 200,
                    message: 'Password Verification code still valid',
                    remainingTime,
                });
            }
        }

        const newVerificationCode = generateVerificationCode();
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 24);

        if (existingVerification) {
            existingVerification.verificationCode = newVerificationCode;
            existingVerification.expirationTime = expirationTime;
            existingVerification.created_at = new Date();
            await existingVerification.save();
        } else {
            const newVerification = new PasswordVerify({
                email,
                verificationCode: newVerificationCode,
                expirationTime,
                createdAt: new Date(),
            });
            await newVerification.save();
        }
        sendPasswordVerificationEmail(email, newVerificationCode);
        res.status(201).json({
            status: 201,
            message: 'Password Verification code generated successfully',
        });
    } catch (error) {
        logger.error('Error during Password Verification:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

async function verifyPasswordCode(req, res) {
    try {
        const { email, code } = req.body;
        const existingVerification = await PasswordVerify.findOne({ email });
        if (existingVerification.verificationCode === code) {
            return res.status(201).json({
                status: 201,
                message: 'Password Change: code verified successfully',
            });
        }

        res.status(400).json({
            status: 400,
            message: 'Invalid code',
        });
    } catch (error) {
        logger.error('Error during password verification:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

module.exports = { verifyPasswordID, verifyPasswordCode };
