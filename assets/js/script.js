document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('signup-form');
    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // If the form is valid, you can submit it or perform other actions
            console.log('Form is valid');
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        if (input.value.trim() === '') {
            formGroup.classList.add('error');
            errorMessage.textContent = `${input.placeholder} cannot be empty`;
            return false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            formGroup.classList.add('error');
            errorMessage.textContent = 'Looks like this is not an email';
            return false;
        } else {
            formGroup.classList.remove('error');
            return true;
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});