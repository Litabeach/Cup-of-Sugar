const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment').value.trim();

    const ask_give_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const user_id = "user"
  
    if (content) {
      const response = await fetch('/api/comment/:id', {
        method: 'POST',
        body: JSON.stringify({ 
            content, ask_give_id, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.comment-form').addEventListener('submit', commentFormHandler);