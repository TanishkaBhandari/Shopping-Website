document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    alert('Sign up successful!'); 

    window.open("/myntra clone/homepage/index.html", "_blank");
});
