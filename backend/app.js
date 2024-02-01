const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');

const config = require('./config');
const validateUser = require('./middlewares/userAuthorisation');

const app = express();

const corsOptions = {
    origin: config.FrontendOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(validateUser);

// Available Routes
app.use('/users', require('./routes/users'));
app.use('/account', require('./routes/userDetails'));
app.use('/trips', require('./routes/trips'));
app.use('/emailVerify', require('./routes/emailVerify'));

app.get('/', (req, res) => {
    const isAuthenticated = req.isAuth;
    res.json({
        isAuth: isAuthenticated,
        userData: req.isAuth === true ? req.user : null,
    });
});

module.exports = app;
