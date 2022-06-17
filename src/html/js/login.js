var users   = require('../models/users');
var router  = require('express').Router();
var bcrypt  = require('bcryptjs');
var jwt     = require('jsonwebtoken');

var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}   
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.admin)
        return next();
    res.redirect('/');
}
function isNotAuthenticated(req, res, next) {
    if (!req.isAuthenticated())

        return next();
    res.redirect('/');
}
function isNotAdmin(req, res, next) {
    if (!req.isAuthenticated() || !req.user.admin)


        return next();
    res.redirect('/');
}
function isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated())


        return next();
    res.redirect('/');
}

let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    let user = users.find(user => user.id === jwt_payload.id);
    if (user) {
        next(null, user);
    }
    else {
        next(null, false);
    }
}
);
passport.use(strategy);

let auth = passport.authenticate('jwt', { session: false });
let authAdmin = passport.authenticate('jwt', { session: false });
let authNotAdmin = passport.authenticate('jwt', { session: false });
let authNotLoggedIn = passport.authenticate('jwt', { session: false });
let authLoggedIn = passport.authenticate('jwt', { session: false });
let authNotAuthenticated = passport.authenticate('jwt', { session: false });
let authAuthenticated = passport.authenticate('jwt', { session: false });