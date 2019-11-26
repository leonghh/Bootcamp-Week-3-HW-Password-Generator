
function generatePassword(){

    //set password length
    var length = prompt("How many characters will you like your password to have?");
    //if character is not a number, alert a error
    if (isNaN(length)) {
        alert("Please type in a number.");
        return;
    }
    //if character is less than 8, prompt user that paswword is too long
    while (length < 8) {
        alert("Password should have 8 or more characters.");
        return;
    }
    //if character is more than 128, prompt user that passwrd is too long
    if (length > 128) {
        alert("Password cannot be that long.");
        return;
    }
    // Confirm whether user will like to include lowercase in their paswword
    var includeLowercase = confirm("Will you like your password to include lowercase?");
            
    // //Confirm whether user will like to include uppercase in their paswword
    var includeUppercase = confirm("Will you like your password to include uppercase?");

    // //Confirm whether user will like to include numbers in their paswword
    var includeNumbers = confirm("Will you like your password to include numbers?");

    // //Confirm whether user will like to include symbols in their paswword
    var includeSymbols = confirm("Will you like your password to include symbols?");
    
    //The application should validate user input and ensure that at least one character type is selected.
    if (includeLowercase == false && includeUppercase == false && includeNumbers == false && includeSymbols == false) {
        alert("Please include at least one character type");
        return;   
    }
    //possible password values
    
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
    var symbols = '!@#$%^&*(){}[]=<>/,.';
    
    
    var charSet = "";

    if (includeLowercase == true) {
        charSet = charSet + lowercase
    };
    if (includeUppercase == true) {
        charSet = charSet + uppercase
    };
    if (includeNumbers == true) {
        charSet = charSet + numbers
    };
    if (includeSymbols == true) {
        charSet = charSet + symbols
    };
    console.log(charSet);

    var password = "";

    //create for loop to choose password characters
    for(var i = 0; i < length; i++) {
        password = password + charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    //add password to textbox/display area
    document.getElementById("result").value = password;

}


//function to copy password to clipboard
function copyPassword(){

    document.getElementById("result").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}