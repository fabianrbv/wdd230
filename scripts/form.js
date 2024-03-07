function updateRatingValue(value) {
    document.getElementById('ratingValue').innerText = value;
}

const contactForm = document.getElementById('contactForm');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

contactForm.addEventListener('submit', (event) => {
    if (password.value !== passwordConfirm.value) {
        event.preventDefault();
        document.getElementById('error').textContent = 'Passwords do not match.';
    }
});