const jwt = require('jsonwebtoken');
const logger = require('../utils/logger/logger');
const { JwtSecret } = require('../config');

const validateUser = (req, res, next) => {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      req.isAuth = false;
    } else {
      jwt.verify(token, JwtSecret, (err, payload) => {
        if (err) {
          req.isAuth = false;
          return res.status(403).json('Invalid Token');
        }
        req.user = {
          uid: payload.id,
          name: payload.name,
          userDetailsID: payload.userDetailsID,
        };
        req.isAuth = true;
      });
    }
    next();
  } catch (error) {
    req.isAuth = false;
    logger.error(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return true;
};

module.exports = validateUser;
