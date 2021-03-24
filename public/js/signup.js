const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector(PLACEHOLDER).value.trim();
    const email = document.querySelector(PLACEHOLDER).value.trim();
    const password = document.querySelector(PLACEHOLDER).value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dash');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector(PLACEHOLDER)
  .addEventListener('submit', signupFormHandler);