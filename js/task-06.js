const inputField = document.querySelector('#validation-input');
// console.log(inputField);

function onBlur() {
    // console.log(this.value.length);
    // console.log(this.dataset.length);

    // console.log(this.style);
    if (this.value.length === Number(this.dataset.length)) {
        // console.log('inside if', this.value.length);
        // console.log('inside if', this.dataset.length);
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        // console.log('inside else', this.value.length);
        // console.log('inside else', this.dataset.length);
        this.classList.remove('valid');
        this.classList.add('invalid');
    }

}

inputField.addEventListener('blur', onBlur);