const form = document.querySelector('.login-form');

form.addEventListener("submit", validateFields);

function validateFields (event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

    if (email.value.trim() === '' || password.value.trim() === '') {
      return alert('Please fill in all the fields!');
    }
  
    const object = { email: email.value, password: password.value }

    console.log(object);
    event.currentTarget.reset();
}


