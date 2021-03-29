// const commentFormHandler = async (event) => {
//     event.preventDefault();

//     const content = document.querySelector('#comment-content').value.trim();

//     const ask_give_id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const user_id = "user"

//       const response = await fetch('/api/post/comment/', {
//         method: 'POST',
//         body: JSON.stringify({ 
//             content, ask_give_id, user_id}),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       console.log(response)
//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//       }
//   };

//   document
//   .querySelector('#commentBtn').addEventListener('click', commentFormHandler);


// ////////////////////////////////////////////////////////////////////////////////////////////

// document
// .querySelector('#commentBtn').addEventListener('click', function (event) {
//   event.preventDefault();

//   const content = document.querySelector('#comment-content').value.trim();

//   const ask_give_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//   ];

//   const user_id = "user"

//     const response = fetch('/api/post/comment/', {
//       method: 'POST',
//       body: JSON.stringify({ 
//           content, ask_give_id, user_id}),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     console.log(response)
//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
// });


// ////////////////////////////////////////////////////////////////////////////////////////////


document
  .querySelector('#commentBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const ask_give_id = document.querySelector('#comment-content').getAttribute("data-id");
    const user_id = document.querySelector('#commentID').getAttribute("user-id");
    


    console.log(content)
    console.log(ask_give_id)
    console.log(user_id)

    // if (content) {

    const response = fetch(`/api/post/comment/`, {
      method: 'POST',
      // body: JSON.stringify({ content: content, ask_give_id: ask_give_id }),
      body: JSON.stringify({ content: content, ask_give_id: ask_give_id, user_id: user_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)

    if (response) {
      document.location.reload;
    } else {
      alert('Failed to create a new comment');
    }
    // }
  });
