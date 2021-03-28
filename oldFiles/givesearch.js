const giveSearchHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#inputCategory').value;

    // const city = document.querySelector('#inputCity').value.trim();

    const zip = document.querySelector('#inputZip').value.trim();
  
   console.log(category)
      const response = await fetch('/api/asks/give_search', {
        method: 'POST',
        body: JSON.stringify({ 
            category, zip}),
        headers: { 'Content-Type': 'application/json' },
      });
      
      // if (response.ok) {
      //   document.location.reload();
      // } else {
      //   alert(response.statusText);
      // }
      console.log(category)
  };

  document
  .querySelector('#searchGives').addEventListener('submit', giveSearchHandler);