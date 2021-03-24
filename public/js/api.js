const api_key = "75451247a85f3bdd608e2d9ed6f9227d"

const app_id = "8f3b7de4"


function testAPI() { 

var testUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=8f3b7de4&app_key=75451247a85f3bdd608e2d9ed6f9227d&state=MN&city=Golden%20Valley&zip=55427"
 $.ajax ({
     method: "GET",
     url: testUrl
 }).then(function (response) {
     console.log(response)
 })
}

testAPI()

// Parameters that work: pageSize, search, searchType, rated, fundraisingOrgs, state, city, zip, minRating, maxRating
