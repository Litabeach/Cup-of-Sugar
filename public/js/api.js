

function charityFormHandler(event) {
    event.preventDefault();

    console.log("hi")

    const state = document.querySelector("#state").value;
    const category = document.querySelector("#catNum").value.trim();

    console.log(state + " " + category)

    queryURL = `/navigation/resources/${category}/${state}`
        

    location.replace(queryURL);
    
}

document
.querySelector('#searchResources').addEventListener('click', charityFormHandler);


