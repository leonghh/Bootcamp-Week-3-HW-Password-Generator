//The user will be prompted to choose from the following password criteria:

//Length (must be between 8 and 128 characters)

// function generate() {
//     var length = prompt("How many characters will you like your password to have?");
//     if (isNaN(length)) {
//         alert("Please type in a number.");
//     }

var length = prompt("How many characters will you like your password to have?")
//if character is not a number, alert a error
if (isNaN(length)) {
    alert("Please type in a number.");
}
//if character is less than 8, prompt user that paswword is too long
if (length < 8) {
    alert("Password should have 8 or more characters.")
}
//if character is more than 128, prompt user that passwrd is too long
if (length > 132) {
    alert("Password cannot be that long.")
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
}

//Once all prompts are answered, computer will generate a password



//Password will be displayed on the textbox

//Character type:

//Lowercase characters
function getLowercase() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

//Uppercase characters
function getUppercase() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

//Numeric characters
function getNumber() {
    const numbers = '1234567890';
    return numbers[Math.floor(Math.random() * numbers.length)];
}

//Special characters (see examples)
function getSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}











// As a bonus, the user should also have the option to click a button to copy the password to their clipboard.