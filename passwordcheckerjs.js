
const truePassword = "b";
const trueUsername = "b";

function authenticateUser() {
    let tries = 3;
    while (tries > 0){
        var un = prompt("Please enter the username");
        var pw = prompt("Please enter the password.");
        if (pw == truePassword && un == trueUsername) {
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


function isUserLoggedIn(isLoggedIn) {
    if(isLoggedIn == true) {
        return "Access Granted";
    }
    else {
        return "Access Denied";
    }
}


