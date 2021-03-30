//search with all three parameters
const askSearchHandler = async (event) => {
    event.preventDefault();
  
    
    const askGive = document.querySelector('#inputAskGive').value.trim();
    const category = document.querySelector('#inputCategory').value;
    const zip = document.querySelector('#inputZip').value.trim();
  
    var queryURL = `/api/asks/ask_search/${askGive}/${category}/${zip}`
  
    location.replace(queryURL)
    };
  
   document
   .querySelector('#searchAsks').addEventListener('click', askSearchHandler);

//     //search with 
//    const askSearchHandler1 = async (event) => {
//     event.preventDefault();
  
    
//     const askGive = document.querySelector('#inputAskGive').value.trim();
//     const category = document.querySelector('#inputCategory').value;
  
//     var queryURL1 = `/api/asks/ask_search/${askGive}/${category}/`
  
//     location.replace(queryURL1)
//     };
  
//    document
//    .querySelector('#searchAsks').addEventListener('click', askSearchHandler1);