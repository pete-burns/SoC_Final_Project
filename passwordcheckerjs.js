const truePassword = "b";
const trueUsername = "Joseph";
let isLoggedIn = false;
let un;
let pw;

let loggedInOutBar = document.querySelector(".topLogin");

function authenticateUser() {
    let tries = 3;
    un = document.querySelector("#inpUn").value;
    pw = document.querySelector("#inpPw").value;
    if (pw == truePassword && un == trueUsername) {
        loggedInOutBar.innerHTML = "Hi "+un+" you are logged in";
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

    if(un == "" || pw == ""){
        alert("Please fill in all the fields");
    }

    else if(isLoggedIn == true) {
        alert("Hi, " + trueUsername + " you are already logged in!");
    }
    else if(isLoggedIn == false){
        isLoggedIn = authenticateUser();
    }
    else {
        alert("err");
    }
}

function logOut() {
    if(isLoggedIn == true) {
        isLoggedIn = false;
    }
    else if(isLoggedIn == false){
        alert("You are already logged out!");
    }
    else {
        alert("err");
    }
}


