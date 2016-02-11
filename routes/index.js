var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut();
var Account = require('../models/account');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/register', ensureLoggedOut, function (req, res) {
  res.render('register', {});
});

router.post('/register', function (req, res) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
    if (err) {
      return res.render('register', {
        info: err.message,
      });
    }

    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect('/');
      });
    });
  });
});

router.get('/login', ensureLoggedOut, function (req, res) {
  res.render('login', { user: req.user, message: req.flash('error') });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function (req, res, next) {
  req.session.save(function (err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/profile', ensureLoggedIn, function (req, res) {
  res.render('profile', { title: 'Profile', user: req.user });
});

router.get('/ping', function (req, res) {
  res.status(200).send('pong!');
});

module.exports = router;
