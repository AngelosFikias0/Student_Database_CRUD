document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';

    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (!name.match(/^[a-zA-Z ]+$/)) {
        document.getElementById('nameError').textContent = 'Only letters and white space allowed';
        valid = false;
    }
    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        valid = false;
    }
    if (age < 0 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 0 and 100';
        valid = false;
    }

    if (valid) {
        this.submit();
    }
});
