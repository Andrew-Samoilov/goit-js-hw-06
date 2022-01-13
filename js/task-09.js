function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const spanTextColor = document.querySelector('.color');
const bodyElement = document.querySelector('body');
// console.log(buttonChangeColor);

function onButtonChangeColor() {
  // console.log(`onButtonChangeColor`);
  const randomTextColor = getRandomHexColor();
  spanTextColor.textContent = randomTextColor;
  bodyElement.style.backgroundColor = randomTextColor;
  // console.log(`getRandomHexColor() ${randomTextColor}`);

}

buttonChangeColor.addEventListener('click', onButtonChangeColor);