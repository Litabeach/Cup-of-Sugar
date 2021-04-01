const router = require('express').Router();
// const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');

//Using the root endpoint

//READ the landing page
router.get('/', (req, res) => {
    try {

        res.render('navigation', {
            loggedIn: req.session.logged_in,
            name: req.session.name
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// //Login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login', {
        loggedIn: req.session.logged_in
    });
});

// router.post('/logout', (req, res) => {
//     console.log("Beginning of logout route");
//     if (req.session.logged_in) {
//       console.log('We are deleting the session');
//       req.session.destroy(() => {
//         res.status(204).end();
        
//         //present a snackbar/alert stating "You have logged out"
//       });
//       console.log('You are now logged out!');
//       //res.render('navigation');
//     } else {
//       res.status(404).end();
//     }
//   });

//Signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup', {
        loggedIn: req.session.logged_in
    });
});


module.exports = router;