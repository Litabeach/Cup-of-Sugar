const logout = async () => {
  console.log('Clicked logout');  
  const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/navigation');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logoutNOW').addEventListener('click', logout);