const bodyParser = require('body-parser');
const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const { postImage } = require('../utils/S3-bucket/create.controller');
const { getImage } = require('../utils/S3-bucket/fetch.controller');
const { replaceImage } = require('../utils/S3-bucket/put.controller');
const { removeImage } = require('../utils/S3-bucket/delete.controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../public/uploads');
        cb(null, uploadDir);
    },
    filename(req, file, cb) {
        const uid = req.user.uid || 'unknownUser';
        const fileExtension = file.originalname.split('.').pop();
        const filename = `${uid}.${fileExtension}`;
        cb(null, filename);
    },
});

const upload = multer({ storage });

const accountImageRouter = Router();

accountImageRouter.use(bodyParser.json());
accountImageRouter.use(bodyParser.urlencoded({ extended: true }));

accountImageRouter.get('/:uid', getImage);
accountImageRouter.post('/', upload.single('image'), postImage);
accountImageRouter.put('/', upload.single('image'), replaceImage);
accountImageRouter.delete('/', removeImage);

module.exports = accountImageRouter;
