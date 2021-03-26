
function testAPI() { 

var testUrl = "https://api.data.charitynavigator.org/v2/Organizations?"+process.env.app_id+"&"+process.env.api_key+"&state=MN&city=Golden%20Valley&zip=55427";
$.ajax ({
     method: "GET",
     url: testUrl
 }).then(function (response) {
     console.log(response);
 });
}

testAPI();

// Parameters that work: pageSize, search, searchType, rated, fundraisingOrgs, state, city, zip, minRating, maxRating
