const router = require('express').Router();
// const {Ask_Give} = require('../models');

//Using the root endpoint

//READ the homepage
//works!
router.get('/', async (req, res) => {
    try {

        res.render ('homepage', {

        })
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

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('national')
});

module.exports = router;