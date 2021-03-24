const router = require('express').Router();
const { } = require('../models');

//Using the root endpoint

//READ the homepage
router.get('/', async (req, res) => {
    try {

        res.render ('', {

        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//Resources page
router.get('/resources', (req, res) => {
    res.render('resources')
});

module.exports = router;