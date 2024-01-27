const fs = require('fs');
const logger = require('../logger/logger');

const replaceObjectS3 = async (fileKey) => fileKey;

async function replaceImage(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
        return;
    }
    try {
        const uploadedImage = req.file;

        if (!uploadedImage) {
            return res.status(404).send({ message: 'Image not found' });
        }

        const { originalname, buffer, mimetype } = uploadedImage;
        const fileKey = `profile_images/${originalname}`;

        await replaceObjectS3(fileKey, buffer, mimetype);

        fs.unlinkSync(uploadedImage.path);

        return res.status(201).send({
            status: 201,
            message: 'Account Image replaced',
        });
    } catch (error) {
        logger.error(`S3-Bucket Put Controller: ${error}`);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { replaceImage };
