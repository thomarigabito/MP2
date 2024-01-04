//(Edited on Dec. 18- Added admin form by Jed)- Get the signup, signin form & admin form
var signupForm = document.getElementById("signup-form");
var signinForm = document.getElementById("signin-form");
var adminForm = document.getElementById("admin-form");

//(Edited on Dec. 18- Added admin form by Jed)- Get the signup and signin link and admin links
var signupLink = document.getElementById("signup-link");
var signinLink = document.getElementById("signin-link");
var adminLink = document.getElementById("admin-page-link");

//(Add by Jed on Dec. 15- Added event listener to the close icon to redirect to the Home page)
var closeIcon = document.getElementById("close-icon");
closeIcon.addEventListener("click", function () {
  window.location.href = "index.html";
});

//(Add by Jed on Dec. 15- Added event listener to the close icon on the Sign-in page to redirect to the Home page)
var closeIconSignin = document.getElementById("close-icon-signin");
closeIconSignin.addEventListener("click", function () {
  window.location.href = "index.html";
});

//(Add by Jed on Dec. 18- Added event listener to the close icon on the Admin page to redirect to the Home page)
var closeIconAdmin = document.getElementById("close-icon-admin");
closeIconAdmin.addEventListener("click", function () {
  window.location.href = "index.html";
});

//(Edited on Dec. 18- Added admin form) Add event listeners to the links to toggle the forms
signupLink.addEventListener("click", function () {
  signupForm.style.display = "block";
  signinForm.style.display = "none";
  adminForm.style.display = "none";
});

signinLink.addEventListener("click", function () {
  signupForm.style.display = "none";
  signinForm.style.display = "block";
  adminForm.style.display = "none";
});

//(Add by Jed on Dec. 18- Admin form toggle display)
adminLink.addEventListener("click", function () {
  signupForm.style.display = "none";
  signinForm.style.display = "none";
  adminForm.style.display = "block";
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

  //(Edited on Dec. 18- Only added Admin Form display)- Switching to the Signin form
  signupForm.style.display = "none";
  signinForm.style.display = "block";
  adminForm.style.display = "none";

  //(Add by Jed on Dec. 18- Added Admin Form display for Switching to the Admin Form)
  signupForm.style.display = "none";
  signinForm.style.display = "block";
  adminForm.style.display = "none";
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
    window.location.href = "housingpage.html";
  } else {
    // Show an error message
    alert("Invalid username or password");
  }
});

// Create a Admin object editted Thomari
  var admin = {
    username: "admin",
    email: email,
    password: "password",
  };

  // Save the user object in localStorage
  localStorage.setItem("admin", JSON.stringify(admin));



    //(Add by Jed on Dec. 18- "Admin Form" Event listener to the admin form to check the user data in localStorage)
  adminForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the user input values
    var username = adminForm.username.value;
    var password = adminForm.psw3.value;
    // Get the user object from localStorage
    var admin = JSON.parse(localStorage.getItem("admin"));
    // Check if the user exists and the credentials match
    if (admin && admin.username === username && admin.password === password) {
      // Clear the form fields
      adminForm.reset();
      // Redirect to the admin page
      window.location.href = "adminpage.html";
    } else {
      // Show an error message
      alert("Invalid username or password");
    }
  });

//Hide and see for password
function togglePasswordVisibility(eyeicon, input) {
  if (input.type === "password") {
    input.type = "text";
    eyeicon.src = "eye-open-blue.png";
  } else {
    input.type = "password";
    eyeicon.src = "eye-close.png";
  }
}

    //(Add by Jed on Dec. 18- "Admin Form" for Switching to the signup form)
      signupForm.style.display = "block";
      adminForm.style.display = "none";

const eyeicon = document.getElementById("eyeicon");
const psw = document.getElementById("psw");
eyeicon.addEventListener("click", () => togglePasswordVisibility(eyeicon, psw));

const eyeicon1 = document.getElementById("eyeicon1");
const pswRepeat = document.getElementById("psw-repeat");
eyeicon1.addEventListener("click", () => togglePasswordVisibility(eyeicon1, pswRepeat));

const eyeicon2 = document.getElementById("eyeicon2");
const psw2 = document.getElementById("psw2");
eyeicon2.addEventListener("click", () => togglePasswordVisibility(eyeicon2, psw2));

//Add on Jan. 3, 2024- Apply the event listeners for the admin form
const eyeicon3 = document.getElementById("eyeicon3");
const psw3 = document.getElementById("psw3");
eyeicon3.addEventListener("click", () => togglePasswordVisibility(eyeicon3, psw3));