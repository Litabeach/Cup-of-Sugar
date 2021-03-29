const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment').value.trim();

    const ask_give_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const user_id = "user"
  
    // if (content) {
      const response = await fetch('/api/post/comment/:id', {
        method: 'POST',
        body: JSON.stringify({ 
            content, ask_give_id, user_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log(response)
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    // }
  };

  // document
  // .querySelector('.comment-form').addEventListener('submit', commentFormHandler);


  // document
  // .querySelector('#commentBtn')
  // .addEventListener('click', function(event){
  //   event.preventDefault();
  
  //   const content = document.querySelector('#comment').value.trim();
  //   const ask_give_id = document.querySelector('#comment').getAttribute("data-id");

  //   console.log(content)
  
  //   // if (content) 
    
  //     const response = fetch(`/api/post/comment/:id`, {
  //       method: 'POST',
  //       body: JSON.stringify({ content: content, ask_give_id: ask_give_id }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log(response)
  
  //     if (response) {
  //       document.location.replace(`/api/post/1`);
  //     } else {
  //       alert('Failed to create a new comment');
  //     }
    
  // });
  