const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan')

const passport = require('passport');
const cors = require('cors')

require('dotenv').config();

// configurations
require('./config/passport')(passport);
require('./config/passport-google')(passport);
require('./config/passport-facebook')(passport);


// app requirements
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SEEK,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(cors({credentials: true, origin: process.env.CORS_URL}))

app.use(passport.initialize());
app.use(passport.session());

// routes
const authRoute = require('./routes/authRoute');
const seedRoute = require('./routes/seedRoute');
const dataRoute = require('./routes/dataRoute')
const paymentRoute = require('./routes/paymentRoute')

app.use('/', authRoute);
app.use('/seed', seedRoute);
app.use('/data', dataRoute);
app.use('/payment', paymentRoute);

module.exports = app;