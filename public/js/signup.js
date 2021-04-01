const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#uName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      if (password.length < 8) {
        alert ("Password must be at least 8 characters.");
        return;
      }
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

  document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);