
const newCommentHandler = async function (event) {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();
  const ask_give_id = document.querySelector('#comment-content').getAttribute("data-id");

  if (content) {

    const response = await fetch(`/api/post/comment/`, {
      method: 'POST',
      body: JSON.stringify({ content: content, ask_give_id: ask_give_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)

    if (response.ok) {
      document.location.replace(`/api/post/${ask_give_id}`);
    } else {
      alert('Failed to create a new comment');
    }
  }
}
document
  .querySelector('#commentBtn')
  .addEventListener('click', newCommentHandler)
