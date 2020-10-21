//variable that determines if someone is logged in or not
let isLoggedIn = false;

//initialise variables that get inputted username and password
let un;
let pw;

let loggedOutBar = document.querySelector(".topLogin");
let loggedInBar = document.querySelector(".topLogout");

loggedInBar.innerHTML = "Hi "+un+"!";

let inputFieldUn = document.querySelector("#inpUn");
let inputFieldPw = document.querySelector("#inpPw");

authErr = document.querySelector("#authenticationError");

refreshStatus();

//function that refreshes that bar that informs the user if they are logged in or playing as guest
function refreshStatus() {
    if(window.localStorage.getItem(isLoggedIn) == 'true'){
        loggedOutBar.classList.add("invisible");
        loggedOutBar.classList.remove("visible");

        loggedInBar.classList.remove("invisible");
        loggedInBar.classList.add("visible");

        getScores();
    }
    
    else{
        loggedOutBar.classList.add("visible");
        loggedOutBar.classList.remove("invisible");

        loggedInBar.classList.remove("visible");
        loggedInBar.classList.add("invisible");
    }
}

//initialise object that holds inputted login info
let loginObj;

//function checks if the username and password are valid
async function authenticateUser() {
    
    //gets username and password - stores as object
    un = document.querySelector("#inpUn").value;
    pw = document.querySelector("#inpPw").value;
    loginObj = {
        username: un,
        password: pw
    };

    let loginResult = await postLogin(loginObj);
    
    if (loginResult.results != null) {
        return true;
    }
    else {
        alert("Username or password incorrect, please try again");

        //clears fields when user gets username or password wrong
        document.querySelector("#inpUn").value = "";
        document.querySelector("#inpPw").value = "";
        
        return false;
    }

}

//send login info to database
async function postLogin(loginObj){
    const response = await fetch("http://127.0.0.1:8080/authAPI/", {
        method: "POST",
        body: JSON.stringify(loginObj),
        headers: {"content-type": "application/JSON"}
    });

    let responseData = await response.json();
    return responseData;
}

//function checks if user is logged in already, if not, runs the user authentication function
async function isUserLoggedIn() {
    un = document.querySelector("#inpUn").value;
    pw = document.querySelector("#inpPw").value;

    //sets the logged in variable to false if it is null
    if(window.localStorage.getItem(isLoggedIn) == null){
        window.localStorage.setItem(isLoggedIn, false);
        refreshStatus();
    }

    //if the user didn't put in any info
    if(un == "" || pw == ""){
        alert("Please fill in all fields");
    }

    else if(window.localStorage.getItem(isLoggedIn) == 'true') {
        logOut();
        let userAuth = await authenticateUser();
        window.localStorage.setItem(isLoggedIn, userAuth);
        refreshStatus();

    }
    
    else if(window.localStorage.getItem(isLoggedIn) == 'false'){
        let userAuth = await authenticateUser();
        window.localStorage.setItem(isLoggedIn, userAuth);
        refreshStatus();
    }
    else {
        alert("err");
    }
}

//funtion that logs the user out
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

let accountCreateObj;

//function that authenticates and sends account creation information
function createAccount(){

    //saves all values from textboxes as variables
    createUn = document.querySelector("#createUn").value;
    createEm = document.querySelector("#createEm").value;
    createPw = document.querySelector("#createPw").value;
    confirmPw = document.querySelector("#confirmPw").value;

    let isUnAuthentic = authenticateUn();
    let isEmAuthentic = authenticateEm();
    let isPwAuthentic = authenticatePw();
    let doesPwMatch = matchPw();

    //will only progress if all fields are valid
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

        //create object to post credentials to database
        accountCreateObj = {
            username: createUn,
            email: createEm,
            password: createPw,
        };

        //post to database
        console.log(accountCreateObj);
    }


}

//checks if username meets criteria
function authenticateUn(){
    if(createUn.length <= 15 && createUn.length >= 6){
        return true;
    }
    else{
        return false;
    }
}

//checks if email is valid
function authenticateEm(){
    if((/.+@.+../.test(createEm))){
        return true;
    }
    else{
        return false;
    }
}

//checks if password meets criteria
function authenticatePw(){
    if(createPw.length <= 15 && createPw.length >= 6 && (/[a-z]/.test(createPw)) && (/[A-Z]/.test(createPw)) && (/[0-9]/.test(createPw)) ){
        return true;
    }
    else{
        return false;
    }
}

//checks if both passwords match
function matchPw(){
    if(createPw === confirmPw){
        return true;
    }
    else{
        return false;
    }
}


async function getScores(){

  const response = await fetch("http://127.0.0.1:8080/rpsResults/"+un);

  let responseData = await response.json();

  console.log("wins "+responseData.wins);
  console.log("losses "+responseData.losses);
  console.log("draws "+responseData.draws);

}

