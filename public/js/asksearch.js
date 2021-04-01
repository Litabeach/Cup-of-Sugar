//search
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




