const router = require('express').Router();
const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');


//Using the root endpoint

//READ the homepage
//works!
router.get('/', (req, res) => {
    try {

        res.render ('landing', {

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
router.get('/asks', (req, res) =>{
    // try{
    //     const askData = await Ask_Give.findAll({
    //         // where: {
    //         //     ask_or_give: 'ask'
    //         // },
    //         // attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
    //         // include: [
    //         //     {
    //         //         model: User,
    //         //         attributes: ['name']
    //         //     }
    //         // ]
    //     });
    //     const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
        res.render('ask');
    //     , {
    //         asks,
    //         loggedIn: req.session.logged_in
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});



//GEt all gives, render them to the give page
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
        res.render('give', {
            gives,
            loggedIn: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
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