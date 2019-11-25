var resultEl = document.getElementById('result');
var generateEl = document.getElementById('generate');
var clipboard = document.getElementById('clipboard');

function promptQuestion() {
    var length = prompt("How many characters will you like your password to have?")
//if character is not a number, alert a error
    if (isNaN(length)) {
        alert("Please type in a number.");
        promptQuestion();
    }
//if character is less than 8, prompt user that paswword is too long
    if (length < 8) {
        alert("Password should have 8 or more characters.");
        promptQuestion();
    }
//if character is more than 128, prompt user that passwrd is too long
    if (length > 128) {
        alert("Password cannot be that long.");
        promptQuestion();
    }
}

function promptSelection() {
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
        promptSelection();
    }
}

//Once all prompts are answered, computer will generate a password
//Set all get characters function in a object
var getCharFunc = {
	lower: getLowercase,
	upper: getUppercase,
	number: getSymbol,
	symbol: getSymbol
}




//Password will be displayed on the textbox

//Character type:

//Lowercase characters
function getLowercase() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

//Uppercase characters
function getUppercase() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

//Numeric characters
function getNumber() {
    var numbers = '1234567890';
    return numbers[Math.floor(Math.random() * numbers.length)];
}

//Special characters (see examples)
function getSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}




//User should also have the option to click a button to copy the password to their clipboard.