const app = require('./app');
const config = require('./config');
const { connectToMongo } = require('./db');
const logger = require('./utils/logger/logger');

const { Port } = config;

(async () => {
    try {
        await connectToMongo();
        app.listen(Port, () => {
            logger.info(
                'TripZip backend listening',
            );
        });
    } catch (error) {
        logger.error('Failed to connect to MongoDB:', error);
    }
})();

module.exports = app;
