const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    NodeEnv: process.env.NODE_ENV,
    Port: process.env.PORT,
    MongodbUri: process.env.MONGODB_URI,
    JwtSecret: process.env.JWT_SECRET,
    JwtExpiresIn: process.env.JWT_EXPIRES_IN,
    FrontendOrigin: process.env.FRONTEND_ORIGIN,
};
