const form = document.getElementById('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + .error');



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
})

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter a valid email';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter email';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email needs to be at least ${email.minLength} characters, you entered ${email.value.length}`
    }
}

