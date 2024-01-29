/* eslint-disable import/no-extraneous-dependencies */

const nodemailer = require('nodemailer');
const fs = require('fs');
const logger = require('../logger/logger');
const { GmailID, GmailPassword } = require('../../config');

const welcomeEmailContent = fs.readFileSync(`${__dirname}/content/welcomeEmailContent.html`, 'utf-8');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: GmailID,
        pass: GmailPassword,
    },
});

async function sendWelcomeEmail(toEmail, userName) {
    const mailOptions = {
        from: { name: 'TripZip', address: GmailID },
        to: toEmail,
        subject: 'Welcome to TripZip',
        html: welcomeEmailContent.replace('{{USERNAME}}', userName),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        logger.info(`Email sent: ${info.response}`);
    } catch (error) {
        logger.error('Error sending email:', error);
        throw error;
    }
}

async function sendVerificationEmail(toEmail, userName, verificationCode) {
    const mailOptions = {
        from: { name: 'TripZip', address: GmailID },
        to: toEmail,
        subject: 'Welcome to TripZip',
        html: welcomeEmailContent.replace('{{USERNAME}}', userName).replace('{{USER EMAIL}}', toEmail).replace('{{CODE}}', verificationCode),
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        logger.info(`Email sent: ${info.response}`);
    } catch (error) {
        logger.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendWelcomeEmail, sendVerificationEmail };
