const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a User - POST Request
router.post('/v1/create-user', (req, res) => {
    console.log("Creating User");
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
})

module.exports = router;

