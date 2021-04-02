// function to log out
const logout = async () => {
  // fetch
  const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('Response was OK');
      alert("You have been logged out");
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  //onclick event for logout
  document.querySelector('#logout').addEventListener('click', logout);