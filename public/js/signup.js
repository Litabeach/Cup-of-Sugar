
// function to sign up for an account
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // variables
    const name = document.querySelector('#uName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      if (password.length < 8) {
        alert ("Password must be at least 8 characters.");
        return;
      }
      // fetch
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText, "could not sign up");
      }
    }
  };

  //on click event for signup
  document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);