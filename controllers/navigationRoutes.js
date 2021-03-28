const router = require('express').Router();
// const { Ask_Give, User } = require('../models');
// const withAuth = require('../utils/auth');

//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});

//get route to render singlepost
router.get('/commentpost', (req, res) => {
    res.render('singlepost', {
        loggedIn: req.session.logged_in
    });

});

//Need Dashboard route
router.get('/dashboard', (req, res) => {
    res.render('dashboard' , {
        loggedIn: req.session.logged_in
    });
    
});
 

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('national', {
        loggedIn: req.session.logged_in
    });
});

module.exports = router;