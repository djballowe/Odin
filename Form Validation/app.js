const form = document.getElementById('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + .error');
const zipCode = document.getElementById('zip');
const zipCodeError = document.querySelector('#zip + .error');
const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');
const confirmPassError = document.querySelector('#confirm-pass + .error');



    const select = document.querySelector('#countries');

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output = "";
        data.forEach(country => {
            output += `<option>${country.name.official}</option>`;
        })

        select.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error'
    } else {
        showError();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter a valid email';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter email';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email needs to be at least ${email.minLength} characters, you entered ${email.value.length}`
    }
}

zipCode.addEventListener('input', (e) => {
    const zipValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zipValid.test(zipCode.value)) {
        zipCodeError.textContent = '';
        zipCodeError.className = 'error';
        zipCode.style.backgroundColor = '#C5ECAF';
    } else {
        zipCodeError.textContent = 'Please enter valid US zip code';
        zipCode.style.backgroundColor = '#ECAFB4';
    }
})

confirmPass.addEventListener('input', (e) => {
    if (confirmPass.value === pass.value) {
        confirmPassError.textContent = '';
        confirmPassError.className = 'error';
        confirmPass.style.backgroundColor = '#C5ECAF';
    } else {
        confirmPassError.textContent = 'Passwords do not match';
        confirmPass.style.backgroundColor = '#ECAFB4';
    }
})