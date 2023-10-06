const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
  try {
    const token = req.cookies?.access_token;

    if (!token) {
      req.isAuth = false;
    }
    else {
      jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
          req.isAuth = false;
          return res.status(403).json('Invalid Token');
        }
        console.log("jwt verified");
        req.user = {
          id: payload.id,
          name: payload.name,
        }
        req.isAuth = true;
      })
    }
    next();
  } catch (error) {
    console.log(error);
    req.isAuth = false;
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = validateUser;
