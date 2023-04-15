const textInput = document.getElementById('validation-input');
const dataLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", (event) => {
    if ( textInput.value.trim().length === dataLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
});