const askSearchHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#inputCategory').value;

    // const city = document.querySelector('#inputCity').value.trim();

    const askGive = document.querySelector('#inputAskGive').value.trim();

    const zip = document.querySelector('#inputZip').value.trim();
    
    var queryURL = `/api/asks/ask_search/${category}/${askGive}/${zip}`
    location.replace(queryURL)
    };
    

  document
  .querySelector('#searchAsks').addEventListener('click', askSearchHandler);