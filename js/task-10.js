function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const inputNumber = controls.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes')

createBtn.addEventListener('click', () => {
  const amount = inputNumber.value;
  createBoxes(amount)
})

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
})


function createBoxes(amount) {
  for (let size = 30; size < 30 + amount * 10; size += 10) {
    const color = getRandomHexColor();
    const box = createBox(size, color);
    boxes.append(box);
  }
}

function createBox(size, color) {
  const div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = color;
  return div
};


