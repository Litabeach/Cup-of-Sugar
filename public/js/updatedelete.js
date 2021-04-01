
//function to update a post or give. Will not changing the ask_or_give paramater mess up the route?
const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#changeTitle').value.trim();
  
    const resource_type = document.querySelector('#changeCategory').value.trim();

    const content = document.querySelector('#changeContent').value.trim();

    const zip_code = document.querySelector('#changeZip').value.trim();

    const contact = document.querySelector('#changeContact').value.trim();
    
    
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
   console.log(post_id)
      const response = await fetch(`/api/post/:id'`, {
        method: 'PUT',
        body: JSON.stringify({
          title, resource_type, content, zip_code, contact, post_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    
  };

  const deleteFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (post_id) {
      const response = await fetch('/api/post/:id', {
        method: 'DELETE',
        body: JSON.stringify({
          post_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };

  //calls update
  document
  .querySelector('#update').addEventListener('click', updateFormHandler);

  document
  .querySelector('.delete').addEventListener('click', deleteFormHandler);