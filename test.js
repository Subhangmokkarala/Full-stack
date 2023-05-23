document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can implement your own authentication logic here
    // For simplicity, let's assume the username is "admin" and the password is "password"
  
    if (username === "admin" && password === "password") {
      window.location.href = "aos.html"; // Redirect to welcome.html after successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  