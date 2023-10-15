const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    NodeEnv: process.env.NODE_ENV,
    Port: process.env.PORT,
    MongodbUri: process.env.NODE_ENV === 'development' ? process.env.DEV_URI : process.env.PROD_URI,
    JwtSecret: process.env.JWT_SECRET,
    JwtExpiresIn: process.env.JWT_EXPIRES_IN,
    FrontendOrigin: process.env.FRONTEND_ORIGIN,
    PostmanApi: `${process.env.POSTMAN_API}${process.env.POSTMAN_ACCESS_KEY}`,
};
