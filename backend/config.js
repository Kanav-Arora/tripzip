/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

let uri;

switch (process.env.NODE_ENV) {
    case 'development':
        uri = process.env.DEV_URI;
        break;
    case 'production':
        uri = process.env.PROD_URI;
        break;
    case 'testing':
        uri = process.env.TEST_URI;
        break;
    default:
        throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
}

module.exports = {
    NodeEnv: process.env.NODE_ENV,
    Port: process.env.PORT,
    MongodbUri: uri,
    JwtSecret: process.env.JWT_SECRET,
    JwtExpiresIn: process.env.JWT_EXPIRES_IN,
    FrontendOrigin: process.env.FRONTEND_ORIGIN,
    PostmanApi: `${process.env.POSTMAN_API}${process.env.POSTMAN_ACCESS_KEY}`,
    ImgurClientID: process.env.IMGUR_CLIENT_ID,
    ImgurClientSecret: process.env.IMGUR_CLIENT_SECRET,
};
