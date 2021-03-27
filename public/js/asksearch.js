const askSearchHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#inputCategory').value;

    // const city = document.querySelector('#inputCity').value.trim();
    console.log(category)

    const askGive = document.querySelector('#inputAskGive').value.trim();

    const zip = document.querySelector('#inputZip').value.trim();
    //const ask = 'ask';

    console.log('category',category);

      const response = await fetch('/api/asks/ask_search', {
        method: 'POST',
        body: JSON.stringify({ 
            category, askGive, zip}),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("response",response);
  
    //   if (response.ok) {
    //     document.location.reload();
    //   } else {
    //     alert(response.statusText);
    //   }
    };
    

  document
  .querySelector('#searchAsks').addEventListener('click', askSearchHandler);