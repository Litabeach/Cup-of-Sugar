const router = require('express').Router();
// const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');

//Using the root endpoint

//READ the landing page
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
    res.render('login', {
        loggedIn: req.session.logged_in
    });
});

//Signup page
//works!
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup', {
        loggedIn: req.session.logged_in
    });
});

//GET route for the navigation page
router.get('/navigation', (req, res) => {
    res.render('navigation', {
        loggedIn: req.session.logged_in,
        name: req.session.name
    });
});

module.exports = router;