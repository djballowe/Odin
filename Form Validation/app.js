const form = document.getElementById('form');
const email = document.getElementById('mail');
const error = document.querySelector('#mail .error');

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        error.textContent = '';
        error.className = 'error'
    } else {
        showError();
    }
})

function showError() {
    if (email.validity.valueMissing) {
        error.textContent = 'You need to enter a valid email';
    } else if (email.validity.typeMismatch) {
        error.textContent = 'Please enter email';
    } else if (email.validity.tooShort) {
        error.textContent = `Email need to be at least ${email.minLength} characters, you entered ${email.value.length}`
    }
    email.classList = 'error active'
}