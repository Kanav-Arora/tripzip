const logger = require('./utils/logger/logger');
const connectToMongo = require('./db');
const config = require('./config');

const { Port } = config;

const app = require('./app');

(async () => {
  try {
    await connectToMongo();
    app.listen(Port, () => {
      logger.info(`Travel Buddy backend listening at http://localhost:${Port}`);
    });
  } catch (error) {
    logger.error('Failed to connect to MongoDB:', error);
  }
})();

module.exports = app;
