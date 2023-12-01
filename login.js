let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let passwordField = document.getElementById("passwordField");
let title = document.getElementById("title");


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log in"; 
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

};

signupBtn.onclick = function () {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
};



