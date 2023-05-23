// Login form submission
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform authentication logic here
  // Example: Check if the username and password are valid

  if (username === "admin" && password === "password") {
    // Show the GIF container after successful login
    var gifContainer = document.getElementById("gif-container");
    gifContainer.classList.remove("hidden");

    // Hide the login form
    loginForm.style.display = "none";
  } else {
    // Show error message if login fails
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
});

function redirectToAgents() {
  window.location.href = "agents.html";
}
