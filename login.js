let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let logIn = document.getElementById("logIn");
let nameField = document.getElementById("nameField");
let passwordField = document.getElementById("passwordField");
let title = document.getElementById("title");


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0"; 
    passwordField.style.maxHeight = "0";
    title.innerHTML = "Log in"; 
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

};
logIn.onclick = function () {
    nameField.style.maxHeight = "0"; 
    passwordField.style.maxHeight = "0";
    title.innerHTML = "Log in"; 
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};
signupBtn.onclick = function () {
    nameField.style.maxHeight = "65px";
    passwordField.style.maxHeight = "65px";
    title.innerHTML = "Sign up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
};
