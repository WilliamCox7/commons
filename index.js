/* PACKAGES */// --
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* EXPORTS */
const config = require('./config');

/* APP */
const app = module.exports = express();

app.use(session({
  secret: config.secret,
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
    db.getUserByUsername([username], function(err, user) {
      user = user[0];
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    })
  }
));

app.post('/auth/local', passport.authenticate('local'), authAPI.login);

/* LOCAL STRATEGY */// -- SIGN UP
passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, function(req, username, password, done) {
    db.getUserByUsername([username], function(err, user) {
      if (!user[0]) {
        var newUser = {
          username: username,
          password: password,
          fb_id: null,
          gplus_id: null,
          first: req.body.firstName,
          last: req.body.lastName,
          email: null
        };
        db.users.save(newUser, function(err, user) {
          db.initUser(user.id, false, function(err, init) {});
          return done(null, user);
        });
      } else {
        return done(err);
      }
    });
  }
));

app.post('/auth/signup', passport.authenticate('signup'), authAPI.signup);

/* FACEBOOK STRATEGY */// -- LOGIN/SIGNUP
passport.use(new FacebookStrategy({
    clientID: config.fb.clientID,
    clientSecret: config.fb.clientSecret,
    callbackURL: "http://localhost:3000/auth/fb/callback"
  },
  function(token, refreshToken, profile, done) {
    console.log(profile);
    MongoClient.connect(app.get('url'), function(err, db) {
      var collection = db.collection("users");
      collection.findOne({
        "fb_id": profile.id
      }, (err, user) => {
        console.log(user);
        if (!user) {
          collection.insertOne({
            fb_id: profile.id,
            first_name: profile.displayName.split(" ")[0],
            last_name: profile.displayName.split(" ")[1],
            // age: profile.age
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

/* ENDPOINTS */

/* SERVER */
app.listen(port, function() {
  console.log('port ' + port + ' is listening...');
});
