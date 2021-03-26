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

//logout - no page yet, untested
//if we chose to have a logout page
// router.get('/logout', (req, res) => {
//     res.render('logout', {
//       loggedIn: req.session.logged_in
//     });
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.status(204).end();
//         alert("you have logged out");
//       });
//     } else {
//       res.status(404).end();
//     }
//   });

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('national')
});

module.exports = router;