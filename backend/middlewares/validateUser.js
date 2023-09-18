const jwt = require('jsonwebtoken');

function validateUser(req, res, next) {
  try {
    const token = req.session.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, "secretKey");

    req.userId = decodedToken.indexOf;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({ message: "Unauthorized" });
  }
}

module.exports = validateUser;
