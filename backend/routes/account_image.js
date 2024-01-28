const bodyParser = require('body-parser');
const { Router } = require('express');
const multer = require('multer');

const { postImage } = require('../utils/S3-bucket/create.controller');
const { removeImage } = require('../utils/S3-bucket/delete.controller');

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        req.fileValidationError = 'Wrong file type';
        cb(null, false, new Error('Wrong file type'));
    }
};

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 2 },
    fileFilter,
});

const accountImageRouter = Router();

accountImageRouter.use(bodyParser.json());
accountImageRouter.use(bodyParser.urlencoded({ extended: true }));

accountImageRouter.post('/', upload.single('image'), (req, res, next) => {
    if (req.fileValidationError) {
        return res.status(400).send({ message: req.fileValidationError });
    }

    postImage(req, res, next);
});
accountImageRouter.delete('/', removeImage);

module.exports = accountImageRouter;
