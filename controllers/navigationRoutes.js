const router = require('express').Router();
// const { Ask_Give, User } = require('../models');
// const withAuth = require('../utils/auth');

//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});

//Dashboard route
router.get('/dashboard', (req, res) => {
    res.render('dashboard' , {
        loggedIn: req.session.logged_in
    });
});
 

//Resources page
router.get('/resources', (req, res) => {
    res.render('resources', {
        loggedIn: req.session.logged_in
    });
});

//National resources page
router.get('/national', (req, res) => {
    res.render('national', {
        loggedIn: req.session.logged_in
    });
});

module.exports = router;