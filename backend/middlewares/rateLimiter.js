// eslint-disable-next-line import/no-extraneous-dependencies
const { rateLimit } = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 50,
    message: 'Too many requests, please try again later.',
    keyGenerator: (req) => req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    skipFailedRequests: true,
});

module.exports = rateLimiter;
