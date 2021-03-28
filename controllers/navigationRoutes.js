const router = require('express').Router();
// const { Ask_Give, User } = require('../models');
// const withAuth = require('../utils/auth');

//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});

//Get all gives, render them to the give page
// router.get('/gives', (req, res) => {
//     res.render('give');

// });

//Need Dashboard route
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});
 

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('national');
});

module.exports = router;