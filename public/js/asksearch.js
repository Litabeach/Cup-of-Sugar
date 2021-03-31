//search
const askSearchHandler = async (event) => {
  event.preventDefault();

  var askGive = document.querySelector('#inputAskGive').value.trim();
  var category = document.querySelector('#inputCategory').value;
  var zip = document.querySelector('#inputZip').value.trim()

  var queryURL = `/api/asks/ask_search?askGive=${askGive}&category=${category}&zip=${zip}`
  location.replace(queryURL)

};

// document
//     .querySelector('#searchAsks').addEventListener('click', askSearchHandler);


// function removeHide() {
//     var noResults = document.getElementById("no-results");
//     noResults.classList.remove("hide");
//   }

document
  .querySelector('#searchAsks')
  .addEventListener('click', function (event) {
    //   event.preventDefault();
    askSearchHandler();
  });

    //    function removeHide() {
    //     var noResults = document.getElementById("no-results");
    //     noResults.classList.remove("hide");
    //   }

    // document
    // .querySelector('#searchAsks')
    // .addEventListener('click', function(event){
    //   event.preventDefault();
    //   removeHide();
    //   window.stop()
    //   return;
    // });

