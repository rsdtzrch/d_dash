const validUsers = {
    "admin": "password123",
    "user1": "mypassword",
    "testuser": "test123",
	"baar":"zagreb"
};

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (validUsers[user] && validUsers[user] === pass) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", user);
        window.location.href = "index.html"; // Redirect to home page
    } else {
        document.getElementById("error-msg").innerText = "Invalid credentials! Try again.";
    }
}

function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    window.location.href = "login.html"; // Redirect to login page
}

// Redirect if user is not logged in (Applies to all pages that include auth.js)
function checkAuth() {
    if (!localStorage.getItem("auth")) {
        window.location.href = "/d_dash/login.html"; // Redirect unauthorized users
    }
}
