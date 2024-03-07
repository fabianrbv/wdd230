function updateRatingValue(value) {
    document.getElementById('ratingValue').innerText = value;
}

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('passwordConfirm');
    const passwordMatchError = document.getElementById('passwordMatchError');

    function validatePasswordMatch() {
        const password = passwordInput.value;
        const passwordConfirm = passwordConfirmInput.value;

        if (password !== passwordConfirm) {
            passwordMatchError.textContent = 'Passwords do not match';
            passwordInput.value = '';
            passwordConfirmInput.value = '';
            passwordInput.focus();
        } else {
            passwordMatchError.textContent = '';
        }
    }

    passwordInput.addEventListener('input', validatePasswordMatch);
    passwordConfirmInput.addEventListener('input', validatePasswordMatch);
});

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    function validateEmail() {
        const email = emailInput.value;

        if (!email.match(/^[a-zA-Z0-9._%+-]+@byui\.edu$/)) {
            emailError.textContent = 'Enter a valid byui.edu email address';
            emailInput.value = '';
            emailInput.focus();
        } else {
            emailError.textContent = '';
        }
    }

    emailInput.addEventListener('input', validateEmail);
});