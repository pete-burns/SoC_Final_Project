const truePassword = "b";
const trueUsername = "Joseph";

let isLoggedIn = false;

let un;
let pw;

let loggedOutBar = document.querySelector(".topLogin");
let loggedInBar = document.querySelector(".topLogout");

loggedInBar.innerHTML = "Hi "+trueUsername+"!";

let inputFieldUn = document.querySelector("#inpUn");
let inputFieldPw = document.querySelector("#inpPw");

refreshStatus();

function refreshStatus() {
    inputFieldUn.value = '';
    inputFieldPw.value = '';
    if(window.localStorage.getItem(isLoggedIn) == 'true'){
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

    if(window.localStorage.getItem(isLoggedIn) == null){
        window.localStorage.setItem(isLoggedIn, false);
        refreshStatus();
    }

    if(un == "" || pw == ""){
        alert("Please fill in all the fields");
    }

    else if(window.localStorage.getItem(isLoggedIn) == 'true') {
        alert("Hi, " + trueUsername + " you are already logged in!");
    }
    else if(window.localStorage.getItem(isLoggedIn) == 'false'){
        window.localStorage.setItem(isLoggedIn, authenticateUser());
        refreshStatus();
    }
    else {
        alert("err");
    }
}

function logOut() {
    if(window.localStorage.getItem(isLoggedIn) == 'true') {
        window.localStorage.setItem(isLoggedIn, false)
        refreshStatus();
    }
    else if(window.localStorage.getItem(isLoggedIn) == 'false'){
        alert("You are already logged out!");
    }
    else {
        alert("err");
    }
}


