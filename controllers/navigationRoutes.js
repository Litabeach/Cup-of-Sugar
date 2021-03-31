const router = require('express').Router();
const axios = require('axios');

//Get all asks, render them to the ask page
router.get('/asks', (req, res) => {
    res.render('ask', {
        loggedIn: req.session.logged_in
    });

});
 
//Resources page
router.get('/resources', (req, res) => {
    res.render('resources', {
        loggedIn: req.session.logged_in
    });
});

//render info to resource page
router.get('/resources/:category/:state', async (req, res) => {
    var apiUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&pageSize=20&categoryID=${req.params.category}&state=${req.params.state}`
    try {
        
        const response = await axios.get(apiUrl);
        console.log(response);
        
        res.render("resources", {
            charity: response.data
        });
    } catch (err) {
        console.log("ERR:", err)
        res.render("resources", {
            message: err.response.data.errorMessage
        })
    }
})

router.get('/national', (req, res) => {
    res.render('national', {
        loggedIn: req.session.logged_in
    });
});

module.exports = router;