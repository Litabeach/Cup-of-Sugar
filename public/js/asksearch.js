//function to search for asks
const askSearchHandler = async (event) => {
    event.preventDefault();
    
    // variables
    var askGive = document.querySelector('#inputAskGive').value.trim();
    var category = document.querySelector('#inputCategory').value;
    var zip = document.querySelector('#inputZip').value.trim()
    
    // url
    var queryURL = `/api/asks/ask_search?askGive=${askGive}&category=${category}&zip=${zip}`

    location.replace(queryURL)
    };
  
    //on click event
   document
   .querySelector('#searchAsks').addEventListener('click', askSearchHandler);
