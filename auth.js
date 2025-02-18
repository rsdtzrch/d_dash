const validUsers = {
    "admin": "password123",
    "user1": "mypassword",
    "testuser": "test123"
};

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (validUsers[user] && validUsers[user] === pass) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", user);
        window.location.href = "index.html";
    } else {
        document.getElementById("error-msg").innerText = "Invalid credentials! Try again.";
    }
}

function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
