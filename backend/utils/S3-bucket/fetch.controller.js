const logger = require('../logger/logger');

const getFromS3 = async (fileKey) => fileKey;

async function getImage(req, res) {
    try {
        const { uid } = req.params;
        if (!uid) {
            return res.status(404).send({ message: 'User not specified' });
        }

        const fileKey = `profile_images/${uid}`;
        const imageURL = getFromS3(fileKey);

        return res.status(200).send({
            status: 200,
            message: 'Account Image fetched',
            data: imageURL,
        });
    } catch (error) {
        logger.error(`S3-Bucket Fetch Controller: ${error}`);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

module.exports = { getImage };
