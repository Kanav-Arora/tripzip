const logger = require('../logger/logger');
const {
    AwsUserProfileImagesBucketName, S3ClientObject,
} = require('../../config');

async function removeImage(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
        return;
    }
    const keyUid = req.user?.uid; // No user -> No uid -> blank key -> Error
    const params = {
        Bucket: AwsUserProfileImagesBucketName,
        Key: keyUid,
    };
    try {
        await S3ClientObject.deleteObject(params).promise();
        res.status(200).send('File deleted at S3 successfully!');
    } catch (error) {
        logger.error(`S3-Bucket Delete Controller: ${error}`);
        res.status(500).send({
            message: 'Error deleting file from S3',
            error: error.message,
        });
    }
}

module.exports = { removeImage };
