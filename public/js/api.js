//Save these to .env
const api_key = "75451247a85f3bdd608e2d9ed6f9227d"
const app_id = "8f3b7de4"

function charityFormHandler(event) { 
    event.preventDefault();
    const location = document.querySelector(PLACEHOLDER).value.trim();
    const category = document.querySelector(PLACEHOLDER).value.trim();
    if (location || category) {
    //This sends the req.query back to the route
    location.replace(`/organizations?category=${category}&state=${location}`)
}
}


//The following will be put into a route.js
const axios = require('axios');
const router = require('express').Router();
// const path = require('path')
//we used this to test the info
// router.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, "../../public/js/test.html"))
// })
router.get('organizations', async (req, res) => {
    console.log(req.query)
    var testUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&state=${req.body.location}`
    try {
    const response = await axios.get(testUrl);
    // console.log(data)
    //need to create view for organizations
        res.render("organizations", {
        charity: response.data})
    } catch (err) {
    }
})
module.exports = router



// Parameters that work for this api: pageSize, search, searchType, rated, fundraisingOrgs, state, city, zip, minRating, maxRating
