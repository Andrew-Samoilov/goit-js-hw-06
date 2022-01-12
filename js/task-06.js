const inputField = document.querySelector('#validation-input');
console.log(inputField);

function onBlur() {
    console.log(this.value.length);

    console.log(this.dataset.length);

    this.style = '#validation-input.invalid';

    // console.log(this.style);
    if (this.value.length === this.dataset.length) {
        this.classList.remove('validation-input.invalid');
        this.classList.add('validation-input.valid');
    } else {
        this.classList.remove('validation-input.valid');
        this.classList.add('validation-input.invalid');
    }

}

inputField.addEventListener('blur', onBlur);