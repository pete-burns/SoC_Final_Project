const truePassword = "b";
const trueUsername = "Joseph";
let isLoggedIn = false;
let un;
let pw;

let loggedOutBar = document.querySelector(".topLogin");
let loggedInBar = document.querySelector(".topLogout");

let inputFieldUn = document.querySelector("#inpUn");
let inputFieldPw = document.querySelector("#inpPw");

refreshStatus();

function refreshStatus() {
    inputFieldUn.value = '';
    inputFieldPw.value = '';
    if(localStorage.getItem(isLoggedIn) == 'true'){
        loggedOutBar.classList.add("invisible");
        loggedOutBar.classList.remove("visible");

        loggedInBar.classList.remove("invisible");
        loggedInBar.classList.add("visible");
    }
    
    else{
        loggedOutBar.classList.add("visible");
        loggedOutBar.classList.remove("invisible");

        loggedInBar.classList.remove("visible");
        loggedInBar.classList.add("invisible");
    }
}


function authenticateUser() {
    let tries = 3;
    un = document.querySelector("#inpUn").value;
    pw = document.querySelector("#inpPw").value;
    if (pw == truePassword && un == trueUsername) {
        return true;
    }
    else {
        alert("Try Again");
        tries -= 1;
        return false;
    }

}


function isUserLoggedIn() {
    un = document.querySelector("#inpUn").value;
    pw = document.querySelector("#inpPw").value;

    if(localStorage.getItem(isLoggedIn) == null){
        localStorage.setItem(isLoggedIn, false);
        refreshStatus();
    }

    if(un == "" || pw == ""){
        alert("Please fill in all the fields");
    }

    else if(localStorage.getItem(isLoggedIn) == 'true') {
        alert("Hi, " + trueUsername + " you are already logged in!");
    }
    else if(localStorage.getItem(isLoggedIn) == 'false'){
        localStorage.setItem(isLoggedIn, authenticateUser());
        refreshStatus();
    }
    else {
        alert("err");
    }
}

function logOut() {
    if(localStorage.getItem(isLoggedIn) == 'true') {
        localStorage.setItem(isLoggedIn, false)
        refreshStatus();
    }
    else if(localStorage.getItem(isLoggedIn) == 'false'){
        alert("You are already logged out!");
    }
    else {
        alert("err");
    }
}


