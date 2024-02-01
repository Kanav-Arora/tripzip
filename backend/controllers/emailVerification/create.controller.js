const EmailVerify = require('../../models/emailVerification.mongo');
const { sendVerificationEmail } = require('../../utils/Nodemailer/NodemailerService');
const logger = require('../../utils/logger/logger');

function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

async function verifyEmailID(req, res) {
    try {
        const { email } = req.query;

        const existingVerification = await EmailVerify.findOne({ email });
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
                    message: 'EmailVerify code still valid',
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
            const newVerification = new EmailVerify({
                email,
                verificationCode: newVerificationCode,
                expirationTime,
                createdAt: new Date(),
            });
            await newVerification.save();
        }
        sendVerificationEmail(email, newVerificationCode);
        res.status(201).json({
            status: 201,
            message: 'EmailVerify code generated successfully',
        });
    } catch (error) {
        logger.error('Error during email EmailVerify:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

async function verifyCode(req, res) {
    try {
        const { email, code } = req.body;
        const existingVerification = await EmailVerify.findOne({ email });
        if (existingVerification.verificationCode === code) {
            return res.status(201).json({
                status: 201,
                message: 'Email verified successfully',
            });
        }

        res.status(400).json({
            status: 400,
            message: 'Invalid code',
        });
    } catch (error) {
        logger.error('Error during email EmailVerify:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

module.exports = { verifyEmailID, verifyCode };
