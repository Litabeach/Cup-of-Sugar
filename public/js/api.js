//function to run third party api
function charityFormHandler(event) {
    event.preventDefault();

    //variables
    const state = document.querySelector("#state").value;
    const category = document.querySelector("#catNum").value.trim();

    // url

    queryURL = `/navigation/resources/${category}/${state}`;     

    location.replace(queryURL);
    
}

// on click for third party api
document
.querySelector('#searchResources').addEventListener('click', charityFormHandler);


