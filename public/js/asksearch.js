  //search
const askSearchHandler = async (event) => {
  event.preventDefault();
  
  var askGive = document.querySelector('#inputAskGive').value.trim();
  var category = document.querySelector('#inputCategory').value;
  var zip = document.querySelector('#inputZip').value.trim()

  var queryURL = `/api/asks/ask_search?askGive=${askGive}&category=${category}&zip=${zip}`

  location.replace(queryURL)
  };

//   await function removeHide() {
//     var noResults = document.getElementById("no-results");
//     noResults.classList.remove("hide");
//   }

//  await removeHide()

 document
 .querySelector('#searchAsks').addEventListener('click', askSearchHandler);



