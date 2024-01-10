const logger = require('../logger/logger');

const removeFromS3 = async (fileKey) => fileKey;

async function removeImage(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
        return;
    }
    try {
        const fileKey = `profile_images/${req.user.uid}`;
        removeFromS3(fileKey);

        return res.status(204).send({
            status: 204,
            message: 'Account Image removed',
        });
    } catch (error) {
        logger.error(`S3-Bucket Delete Controller: ${error}`);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { removeImage };
