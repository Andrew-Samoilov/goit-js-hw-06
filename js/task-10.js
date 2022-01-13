function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

console.log(divBoxes, inputNumber, createButton, destroyButton);

function createBoxes(amount = 1) {
  console.log(`Create ${amount} boxes`);
  let boxesStr = '';
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    // console.log(`make ${i} box`);
    boxesStr += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};">${i + 1}</div>`;
    boxSize += 10;
  }

  console.log(boxesStr);
  return boxesStr;
}

function destroyBoxes() {
  console.log(`destroy boxes click`);
  divBoxes.innerHTML = '';
}

function onCreateButtonlick() {
  // createBoxes(inputNumber.value);
  divBoxes.insertAdjacentHTML("afterbegin", createBoxes(inputNumber.value));
  // console.log(`create boxes click`);
}

createButton.addEventListener('click', onCreateButtonlick);
destroyButton.addEventListener('click', destroyBoxes);
