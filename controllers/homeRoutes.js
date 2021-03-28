const router = require('express').Router();
const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');


//Using the root endpoint

//READ the homepage
//works!
router.get('/', (req, res) => {
    try {

        res.render('landing', {

            loggedIn: req.session.logged_in

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login page
//works!
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Signup page
//works!
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});


//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});

//Get all gives, render them to the give page
router.get('/gives', (req, res) => {
    res.render('give');

});


//GET route for the navigation page
router.get('/navigation', (req, res) => {
    res.render('navigation');
});

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('resources');
});

module.exports = router;