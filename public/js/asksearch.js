const askSearchHandler = async (event) => {
    event.preventDefault();
  
    const category = document.querySelector('#inputCategory').value;

    const city = document.querySelector('#inputCity').value.trim();

    const zip = document.querySelector('#inputZip').value.trim();
  
   console.log(category)
      const response = await fetch('', {
        method: 'GET',
        body: JSON.stringify({ 
            category, city, zip}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    
  };

  document
  .querySelector('.searchAsks').addEventListener('submit', giveSearchHandler);