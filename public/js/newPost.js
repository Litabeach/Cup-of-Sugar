const newPostHandler = async (event) => {
  event.preventDefault();

  const ask_or_give = document.querySelector('#inputAskGive').value.trim();

  const title = document.querySelector('#titleInput').value.trim();

  const content = document.querySelector('#contentInput').value.trim();

  const zip_code = document.querySelector('#inputZip').value.trim();

  const resource_type = document.querySelector('#inputCategory').value.trim();

  const contact = document.querySelector('#inputContact').value.trim();

  if(!contact){
    alert("Please enter contact information so your neighbors can connect with you!")
    return;
  }
  
  if(zip_code.length < 5 || zip_code.length > 5 ){
    alert("Please enter a 5 digit zip code!")
    return;
  }

    const response = await fetch(`/api/post/askpost`, {
      method: 'POST',
      body: JSON.stringify({
        ask_or_give, title, content, zip_code, resource_type, contact
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  
};

document.querySelector('#postAsk').addEventListener('click', newPostHandler);
