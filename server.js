const express = require('express'); 
const mongoose = require('mongoose');
const morgan = require('morgan')
const session = require('express-session');
const path = require('path')
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const cors = require('cors')

// configurations
require('dotenv').config()
require('./config/passport')(passport);
require('./config/passport-google')(passport);
require('./config/passport-facebook')(passport);

// app requirements
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
    secret: process.env.SEEK,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

const { dbConnection, db, options } = require('./utils/database-utils');

mongoose.connect(db, options, (err) => dbConnection(err));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

// routes
const authRoute = require('./routes/authRoute');
const seedRoute = require('./routes/seedRoute');
const dataRoute = require('./routes/dataRoute')
const paymentRoute = require('./routes/paymentRoute')

app.use('/', authRoute);
app.use('/seed', seedRoute);
app.use('/data', dataRoute);
app.use('/payment', paymentRoute);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));