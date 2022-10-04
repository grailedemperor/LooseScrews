const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#userNameBox').value.trim();
  const password = document.querySelector('#pwBox').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#userNameBoxSignup').value.trim();
  const email = document.querySelector('#emailBoxSignup').value.trim();
  const password = document.querySelector('#pwBoxSignup').value.trim();

  if (name && email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);
