//search with all three parameters
const askSearchHandler = async (event) => {
    event.preventDefault();
    
    var askGive = document.querySelector('#inputAskGive').value.trim();
    var category = document.querySelector('#inputCategory').value;
    var zip = document.querySelector('#inputZip').value.trim()
    

    var queryURL = `/api/asks/ask_search?askGive=${askGive}&category=${category}&zip=${zip}`

    location.replace(queryURL)
    };
  
   document
   .querySelector('#searchAsks').addEventListener('click', askSearchHandler);










    //search with ask/give and category
//    const askSearchHandler1 = async (event) => {
//     event.preventDefault();
  
    
//     const askGive = document.querySelector('#inputAskGive').value.trim();
//     const category = document.querySelector('#inputCategory').value;
  
//     var queryURL1 = `/api/asks/ask_search/${askGive}/${category}/`
  
//     location.replace(queryURL1)
//     };
  
//    document
//    .querySelector('#searchAsks').addEventListener('click', askSearchHandler1);

//     //search with askgive and zip code
//    const askSearchHandler2 = async (event) => {
//     event.preventDefault();
    
//     const askGive = document.querySelector('#inputAskGive').value.trim();
//     const zip = document.querySelector('#inputZip').value.trim();
  
//     var queryURL2 = `/api/asks/ask_search/${askGive}/${zip}/`
  
//     location.replace(queryURL2)
//     };
  
//     //search with just ask/give
//    document
//    .querySelector('#searchAsks').addEventListener('click', askSearchHandler2);

//        //search with askgive and zip code
//        const askSearchHandler3 = async (event) => {
//         event.preventDefault();
        
//         const askGive = document.querySelector('#inputAskGive').value.trim();
       
      
//         var queryURL3 = `/api/asks/ask_search/${askGive}/`
      
//         location.replace(queryURL3)
//         };
      
//        document
//        .querySelector('#searchAsks').addEventListener('click', askSearchHandler);