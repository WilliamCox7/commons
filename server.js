/* PACKAGES */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/commons';
const app = module.exports = express();

/* APP */
app.set('port', (process.env.PORT || 3000));
app.set('mongo', mongoClient);
app.set('url', (process.env.MONGODB_URI || mongoURI));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((obj, done) => { done(null, obj); });

/* ENDPOINTS */

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
