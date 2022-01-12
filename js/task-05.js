let nameInputField = document.querySelector("#name-input");
let textName = document.querySelector("#name-output");
textName.textContent = 'Anonymous';

// console.log(textName);

function onInput() {
    if (!this.value) {
        textName.textContent = 'Anonymous'
    } else {
        textName.textContent = this.value;
    }
    // console.log(textName);
}

nameInputField.addEventListener(`input`, onInput);