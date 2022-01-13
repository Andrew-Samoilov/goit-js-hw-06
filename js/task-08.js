const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const formObject = {
        email: formElements.email.value,
        password: formElements.password.value,
        reset() {
            this.email = '';
            this.password = '';
        }
    };

    if (!formObject.email || !formObject.password) {
        alert('Все поля должны быть заполнены.')
    } else {
        console.log('Form object', formObject);
        formObject.reset();
    }
    console.log('Form object', formObject);
}
