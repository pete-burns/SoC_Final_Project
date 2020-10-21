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

authErr = document.querySelector("#authenticationError");

refreshStatus();

function refreshStatus() {
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

function createAccount(){
    createUn = document.querySelector("#createUn").value;
    createEm = document.querySelector("#createEm").value;
    createPw = document.querySelector("#createPw").value;
    confirmPw = document.querySelector("#confirmPw").value;

    let isUnAuthentic = authenticateUn();
    let isEmAuthentic = authenticateEm();
    let isPwAuthentic = authenticatePw();
    let doesPwMatch = matchPw();

    if(!isUnAuthentic){
        authErr.innerHTML = "Please make sure that you username is between 6 and 15 characters";
    }
    else if(!isEmAuthentic){
        authErr.innerHTML = "Please make sure that you enter a valid email";
    }
    else if(!isPwAuthentic){
        authErr.innerHTML = "Please make sure that your password meets the criteria";
    }
    else if(!doesPwMatch){
        authErr.innerHTML = "Please make sure that all your passwords match";
    }
    else if(isUnAuthentic && isEmAuthentic && isPwAuthentic && doesPwMatch){
        authErr.innerHTML = "Hooray";
        //create a new column on database
    }


}

function authenticateUn(){
    if(createUn.length <= 15 && createUn.length >= 6){
        return true;
    }
    else{
        return false;
    }
}

function authenticateEm(){
    if((/.+@.+../.test(createEm))){
        return true;
    }
    else{
        return false;
    }
}

function authenticatePw(){
    if(createPw.length <= 15 && createPw.length >= 6 && (/[a-z]/.test(createPw)) && (/[A-Z]/.test(createPw)) && (/[0-9]/.test(createPw)) ){
        return true;
    }
    else{
        return false;
    }
}

function matchPw(){
    if(createPw === confirmPw){
        return true;
    }
    else{
        return false;
    }
}

