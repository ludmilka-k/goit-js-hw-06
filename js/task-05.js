const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

textInput.addEventListener("input", (event) => {
    
    if (event.currentTarget.value.trim() === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = event.currentTarget.value;
    }
});