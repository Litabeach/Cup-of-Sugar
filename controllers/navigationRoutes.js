const router = require('express').Router();
const axios = require('axios');
// const { Ask_Give, User } = require('../models');
// const withAuth = require('../utils/auth');

//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});

//get route to render singlepost
// router.get('/commentpost', (req, res) => {
//     res.render('singlepost', {
//         loggedIn: req.session.logged_in
//     });

// });

//Need Dashboard route
router.get('/dashboard', (req, res) => {
    res.render('dashboard' , {
        loggedIn: req.session.logged_in,
        name: req.session.name
    });
    
});
 

//Resources page
//works!
router.get('/resources', (req, res) => {
    res.render('resources', {
        loggedIn: req.session.logged_in
    });
});

//render info to resource page
router.get('/resources/:category/:state', async (req, res) => {
    var apiUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&categoryID=${req.params.category}&state=${req.params.state}`
    try {
        //axios is a package that allows us to call the API from here
        const response = await axios.get(apiUrl);
        console.log(response);
        //need to create view for organizations
        res.render("resources", {
            charity: response.data
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/national', (req, res) => {
    res.render('national', {
        loggedIn: req.session.logged_in
    });
});

module.exports = router;