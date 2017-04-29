/* PACKAGES */// --
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* EXPORTS */
// const config = require('./config');
const auth = require('./server/auth');

/* APP */
const app = module.exports = express();

app.use(session({
  secret: /*config.secret*/'devsecret',
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/build'));

/* DATABASE */
var url = 'mongodb://localhost:27017/commons';

/* AUTH */
/* LOCAL STRATEGY */// -- LOG IN
passport.use('local', new LocalStrategy(
  function(username, password, done) {
    MongoClient.connect(app.get('url'), function(err, db) {
      var collection = db.collection("users");
      collection.findOne({
        "username": username,
        "password": password
      }, (err, user) => {
        assert.equal(err, null);
        done(null, user);
        db.close();
      });
    });
  }
));

app.post('/auth/local', passport.authenticate('local'), auth.login);

/* LOCAL STRATEGY */// -- SIGN UP
passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, function(req, username, password, done) {
    MongoClient.connect(app.get('url'), function(err, db) {
      var collection = db.collection("users");
      collection.findOne({
        "username": username
      }, (err, user) => {
        assert.equal(err, null);
        if (user) {
          var newUser = {
            username: username,
            password: password,
            fb_id: null,
            first_name: req.body.first_name,
            last: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender
          }
          collection.insertOne(newUser, function(err, user) {
            assert.equal(err, null);
            done(null, user);
          });
        } else {
          done(err);
        }
        db.close();
      });
    });
  }
));

app.post('/auth/signup', passport.authenticate('signup'), auth.signup);

/* FACEBOOK STRATEGY */// -- LOGIN/SIGNUP
passport.use(new FacebookStrategy({
    // clientID: config.fb.clientID,
    // clientSecret: config.fb.clientSecret,
    // callbackURL: "http://localhost:3000/auth/fb/callback"
    clientID: 'devfbid',
    clientSecret: 'devfbsecret',
    callbackURL: "http://localhost:3000/auth/fb/callback"
  },
  function(token, refreshToken, profile, done) {
    MongoClient.connect(app.get('url'), function(err, db) {
      var collection = db.collection("users");
      collection.findOne({
        "fb_id": profile.id
      }, (err, user) => {
        if (!user) {
          collection.insertOne({
            fb_id: profile.id,
            first_name: profile.displayName.split(" ")[0],
            last_name: profile.displayName.split(" ")[1],
            // age: profile.age,
            // gender: profile.gender
          }, (err, result) => {
            assert.equal(err, null);
            done(null, user);
            db.close();
          });
        } else {
          assert.equal(err, null);
          return done(err, user);
          db.close();
        }
      });
    });
  }
));

app.get('/auth/fb', passport.authenticate('facebook', { scope : 'email' }));

app.get('/auth/fb/callback', passport.authenticate('facebook', {
    successRedirect: '/#!/',
    failureRedirect: '/#!/login'
}));

/* FS */
const fs = require('fs');
var hobbies = [];
var defines = [];
fs.readFile('./server/hobbies.json', 'utf8', (err, data) => { hobbies = JSON.parse(data); });
fs.readFile('./server/defines.json', 'utf8', (err, data) => { defines = JSON.parse(data); });

/* ENDPOINTS */
app.get('/hobbies', (req, res) => {
  res.status(200).send(hobbies.hobbies);
});

app.get('/defines', (req, res) => {
  res.status(200).send(defines.defines);
});

/* SERVER */
app.listen(app.get('port'), function() {
  console.log('port ' + app.get('port') + ' is listening...');
});
