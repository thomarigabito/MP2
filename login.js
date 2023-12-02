// Get the signup and signin forms
var signupForm = document.getElementById("signup-form");
var signinForm = document.getElementById("signin-form");

// Get the signup and signin links
var signupLink = document.getElementById("signup-link");
var signinLink = document.getElementById("signin-link");

// Add event listeners to the links to toggle the forms
signupLink.addEventListener("click", function () {
  signupForm.style.display = "block";
  signinForm.style.display = "none";
});

signinLink.addEventListener("click", function () {
  signupForm.style.display = "none";
  signinForm.style.display = "block";
});

// Add event listener to the signup form to save the user data in localStorage
signupForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the user input values
  var username = signupForm.username.value;
  var email = signupForm.email.value;
  var password = signupForm.psw.value;
  var passwordRepeat = signupForm["psw-repeat"].value;

  // Validate the password match
  if (password !== passwordRepeat) {
    alert("Passwords do not match");
    return;
  }

  // Create a user object
  var user = {
    username: username,
    email: email,
    password: password,
  };

  // Save the user object in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Clear the form fields
  signupForm.reset();

  // Show a success message
  alert("You have successfully signed up. Please sign in to continue.");

  // Switch to the signin form
  signupForm.style.display = "none";
  signinForm.style.display = "block";
});

// Add event listener to the signin form to check the user data in localStorage
signinForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the user input values
  var username = signinForm.username.value;
  var password = signinForm.psw2.value;

  // Get the user object from localStorage
  var user = JSON.parse(localStorage.getItem("user"));

  // Check if the user exists and the credentials match
  if (user && user.username === username && user.password === password) {
    // Clear the form fields
    signinForm.reset();

    // Redirect to the hero page
    window.location.href = "index.html";
  } else {
    // Show an error message
    alert("Invalid username or password");
  }
});

//Hide and see for password
function togglePasswordVisibility(eyeicon, input) {
  if (input.type === "password") {
    input.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    input.type = "password";
    eyeicon.src = "eye-close.png";
  }
}

const eyeicon = document.getElementById("eyeicon");
const psw = document.getElementById("psw");
eyeicon.addEventListener("click", () => togglePasswordVisibility(eyeicon, psw));

const eyeicon1 = document.getElementById("eyeicon1");
const pswRepeat = document.getElementById("psw-repeat");
eyeicon1.addEventListener("click", () => togglePasswordVisibility(eyeicon1, pswRepeat));

const eyeicon2 = document.getElementById("eyeicon2");
const psw2 = document.getElementById("psw2");
eyeicon2.addEventListener("click", () => togglePasswordVisibility(eyeicon2, psw2));
