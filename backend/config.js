const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    jwt_scret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
};
