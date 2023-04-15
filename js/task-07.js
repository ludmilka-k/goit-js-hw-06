const runner = document.getElementById('font-size-control');
const outputText = document.getElementById('text');

adjustFontSize();

runner.addEventListener("input", adjustFontSize);

function adjustFontSize() {
    const fontSize = runner.value;
    outputText.style.fontSize = `${fontSize}px`
};