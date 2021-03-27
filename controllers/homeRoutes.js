const router = require('express').Router();
const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');


//Using the root endpoint

//READ the homepage
//works!
router.get('/', (req, res) => {
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

//READ all asks
router.get('/asks', withAuth, async (req, res) =>{
    try{
        const askData = await Ask_Give.findAll({
            where: {
                ask_or_give: 'ask',
            },
            attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
        res.render('asks', {
            asks,
            loggedIn: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ all gives
router.get('/gives', withAuth, async (req, res) =>{
    try{
        const giveData = await Ask_Give.findAll({
            where: {
                ask_or_give: 'give',
            },
            attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const gives = giveData.map((ask_give) => ask_give.get({ plain: true }));
        res.render('gives', {
            gives,
            loggedIn: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//Need a GET route for the dashboard

//Need a GET route for the navigation page

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('resources')
});

module.exports = router;