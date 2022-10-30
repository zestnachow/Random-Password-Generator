// Assignment Code

// Declaring arrays with all possible values for different character types (lowercase letters, numbers, etc.)

const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];


// Store a reference to the "generate password" button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    // Variable receives the value the user inputs when answering the prompt
    let length = prompt("Please enter the number of characters you'd like in your password. Make sure the number is at least 8 and no more than 128.");
    // If the user's answer isn't a number or doesnt fall into the right range, they will be reminded of the password criteria
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Remember to only enter a number between 8 and 128! This will determine the length of your password.");
        return "";
    }
    // Variables store boolean values for user's response to each of the following prompts
    let lowerCaseBoolean = confirm("Would you like to include lowercase letters in your password?");
    let upperCaseBoolean = confirm("Would you like to include uppercase letters in your password?");
    let numberBoolean = confirm("Would you like to include numbers in your password?");
    let specialCharactersBoolean = confirm("Would you like to include special characters in your password?");
    // If the user doesn't choose any character types, they will be reminded to choose at least one in order to move forward
}