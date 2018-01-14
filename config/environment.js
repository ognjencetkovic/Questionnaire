
var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var settings = require('./settings');
var models   = require('../models/');

module.exports = function (app) {
    app.set('port', process.env.PORT || 8080);
    app.set('views', [settings.path + '/views', settings.path + '/views/dashboard']);
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use("/public", express.static(path.join(settings.path, 'public')));
    app.use(function (req, res, next) {
        models(function (err, db) {
            if (err) return next(err);

            req.models = db.models;
            req.db = db;

            return next();
        });
    }),
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: (30 * 86400 * 1000) },
        //expires: new Date(Date.now() + (30 * 86400 * 1000))
    }));
    
    app.listen(8080);
};