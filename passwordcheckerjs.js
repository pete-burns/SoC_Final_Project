const truePassword = "b";
function authenticateUser() {
    let tries = 3;
    while (tries > 0){
        var pw = prompt("Please enter the password.");
        if (pw == truePassword) {
            alert("Login Sucessful");
            return true;
            break;
        }
        else {
            alert("Try Again");
            tries -= 1;
        }

    }
    return false;
}

let isLoggedIn = authenticateUser();

function isUserLoggedIn(isLoggedIn) {
    if(isLoggedIn == true) {
        return "Access Granted";
    }
    else {
        return "Access Denied";
    }
}

let accessGranted = isUserLoggedIn();
alert(isUserLoggedIn);