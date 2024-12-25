// Show the login form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    clearMessages();
}

// Show the register form
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    clearMessages();
}

// Clear error messages
function clearMessages() {
    document.getElementById('login-error-message').innerText = '';
    document.getElementById('register-error-message').innerText = '';
}

// Handle login
function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('login-error-message');

    if (username === '' || password === '') {
        errorMessage.innerText = "All fields are required!";
        return false;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
        errorMessage.innerText = "Invalid username or password!";
        return false;
    }

    alert("Login successful!");
    window.location.href = "main.html"; // Replace with your dashboard page
    return false;
}

// Handle register
function handleRegister() {
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const errorMessage = document.getElementById('register-error-message');

    if (username === '' || password === '' || confirmPassword === '') {
        errorMessage.innerText = "All fields are required!";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match!";
        return false;
    }

    const userData = {
        username,
        password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert("Registration successful! Please login.");
    showLogin();
    return false;
}

// Initialize with the login form visible
showLogin();
