const logger = require('../logger/logger');
const {
    AwsUserProfileImagesBucketName, S3ClientObject,
} = require('../../config');

async function postImage(req, res) {
    if (req.isAuth === false) {
        res.status(401).send({ message: 'Unauthorised access' });
        return;
    }
    const uploadedImage = req.file;
    if (!uploadedImage) {
        return res.status(404).send({ message: 'Image not found' });
    }
    const keyUid = req.user?.uid; // Not allowing non-user account to upload
    const params = {
        Bucket: AwsUserProfileImagesBucketName,
        Key: keyUid,
        Body: uploadedImage.buffer,
        ContentType: uploadedImage.mimetype,
    };
    try {
        await S3ClientObject.upload(params).promise();
        res.status(200).send('File uploaded to S3 successfully!');
    } catch (error) {
        logger.error(`S3-Bucket Delete Controller: ${error}`);
        res.status(500).send({
            message: 'Error uploading file to S3',
            error: error.message,
        });
    }
}

module.exports = { postImage };
