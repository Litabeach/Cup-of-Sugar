//function to log in
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // variables
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {

      // fetch
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  //on click event for login
  document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);
