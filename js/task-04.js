let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
// console.log(decrementButton, incrementButton);
const val = document.querySelector("#value");
// console.log(val.textContent)
val.textContent = counterValue;

function onDecrementButtonClick() {
    counterValue--;
    // console.log(`-`, counterValue);
    val.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue++;
    // console.log(`+`, counterValue);
    val.textContent = counterValue;
}
decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);


