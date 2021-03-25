

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
    var testUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&state=${req.query.location}`
    try {
        //axios is a package that allows us to call the API from here
        const response = await axios.get(testUrl);
        console.log(data)
        //need to create view for organizations
        res.render("organizations", {
            charity: response.data
        })
    } catch (err) {
    }
})
module.exports = router



// Parameters that work for this api: pageSize, search, searchType, rated, fundraisingOrgs, state, city, zip, minRating, maxRating

const categoryBreakdown = [{ category: "Animals", url: "Animals1.jpg", catNum: "1", photoCat: "Animals" }, { category: "Arts Culture Humanities", url: "ArtsCultureHumanities2.jpg", catNum: "2", photoCat: "Arts" },
{ category: "Education", url: "Education3.jpg", catNum: "3", photoCat: "Education" }, { category: "Environment", url: "Environment4.jpg", catNum: "4", photoCat: "Environment" },
{ category: "Health", url: "Health5.jpg", catNum: "5", photoCat: "Health" }, { category: "Human Services", url: "HumanServices6.jpg", catNum: "6", photoCat: "Humanity" },
{ category: "Human Civil Rights", url: "HumanCivilRights8.jpg", catNum: "8", photoCat: "Civil+Rights" }, { category: "Religion", url: "Religion9.jpg", catNum: "9", photoCat: "Religion" },
{ category: "Research Public Policy", url: "ResearchPublicPolicy11.jpg", catNum: "11", photoCat: "Government" }];
