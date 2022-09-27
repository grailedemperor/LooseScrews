const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#product-name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const details = document.querySelector('#product-details').value.trim();

  if (name && price && description) {
    const response = await fetch(`/api/product`, {
      method: 'POST',
      body: JSON.stringify({ name, price, details }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete product');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
