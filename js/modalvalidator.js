// Displaying errors
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function showSuccess() {
    document.getElementById('Successy').style.display = "block";
 }

 function reset() {
    document.getElementByName("reserve").reset();
  }


//Form validation function
function validate() {
    var firstname = document.reserve.first.value;
    var lastname = document.reserve.last.value;
    var email = document.reserve.email.value;
    var textfield = document.reserve.textSquare.value;

    var firstError = lastError = mailError = textError = true;

    // Validating Name
    if (firstname == "") {
        document.getElementById('first').style.borderColor = "red";
        printError("firstError", "Please enter your name.");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstname) === false) {
            document.getElementById('first').style.borderColor = "red";
            printError("firstError", "Please enter a valid name.");
        } else if (firstname.length < 2) {
            document.getElementById('first').style.borderColor = "red";
            printError("firstError", "Please at least 2 characters for firstname field.");
        } else {
            printError("firstError", "");
            firstError = false;
        }
    }

    // Validating Lastname
    if (lastname == "") {
        document.getElementById('last').style.borderColor = "red";
        printError("lastError", "Please enter your last name.");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastname) === false) {
            document.getElementById('last').style.borderColor = "red";
            printError("lastError", "Please enter a valid name.");
        } else if (lastname.length < 2) {
            document.getElementById('last').style.borderColor = "red";
            printError("lastError", "Please at least 2 characters for lastname field.");
        } else {
            printError("lastError", "");
            lastError = false;
        }
    }

    // Validating email 
    if (email == "") {
        document.getElementById('email').style.borderColor = "red";
        printError("mailError", "Please enter your email address.");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            document.getElementById('email').style.borderColor = "red";
            printError("mailError", "Please enter a valid email address.");
        } else {
            printError("mailError", "");
            mailError = false;
        }
    }

    //Add text field validator
    if (textfield == "") {
        document.getElementById('textSquare').style.borderColor = "red";
        printError("textError", "Please write a message.");
    }  else {
            printError("textError", "");
            textError = false;
        }

    //Do not send the form if there are errors
    if (firstError || lastError || mailError || textError) {
        return false;
    }
};