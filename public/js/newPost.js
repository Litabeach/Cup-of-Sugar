const newPostHandler = async (event) => {
    event.preventDefault();
  
    const askGive = document.querySelector('#inputAskGive').value.trim();

    const title = document.querySelector('#titleInput').value.trim();
  
    const resource_type = document.querySelector('#inputCategory').value.trim();

    const content = document.querySelector('#contentInput').value.trim();

    const zip_code = document.querySelector('#inputZip').value.trim();

    const contact = document.querySelector('#inputContact').value.trim();
    
  console.log(askGive)
      const response = await fetch(`/api/post/askpost`, {
        method: 'PUT',
        body: JSON.stringify({
            askGive, title, resource_type, content, zip_code, contact
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    
  };

  

  document
  .querySelector('#postAsk').addEventListener('click', newPostHandler);

  //Possible Route
//   router.post('/askpost', async (req, res) => {
//     const user = req.session.user_id
//     console.log(user)
//     try {
//         const newPost = await Ask_Give.create({
//             ask_or_give: req.body.askGive,
//             title: req.body.title,
//             content: req.body.resource_type,
//             zip_code: req.body.zip_code,
//             resource_type: req.body.resource_type,
//             contact: req.body.contact,
//             user_id: user
//         });
//         console.log("hello")
//         res.status(200).json(newPost);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });