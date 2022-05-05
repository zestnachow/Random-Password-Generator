// Assignment code here
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];


// Get references to the #generate element
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
  var length = prompt("Please enter the number of characters you'd like in your password. Make sure the number is at least 8 and no more than 128.");
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Remember to only enter a number between 8 and 128! This will determine the length of your password.");
  }
  var lowerCaseBoolean = confirm("Would you like to include lowercase letters in your password?");
  var upperCaseBoolean = confirm("Would you like to include uppercase letters in your password?");
  var numberBoolean = confirm("Would you like to include numbers in your password?");
  var specialCharacterBoolean = confirm("Would you like to include special characters in your password?");
  while (!lowerCaseBoolean && !upperCaseBoolean && !numberBoolean && !specialCharacterBoolean) {
    alert("You must select at least one character type in order to create a password.");
    lowerCaseBoolean = confirm("Would you like to include lowercase letters in your password?");
    upperCaseBoolean = confirm("Would you like to include uppercase letters in your password?");
    numberBoolean = confirm("Would you like to include numbers in your password?");
    specialCharacterBoolean = confirm("Would you like to include special characters in your password?");
  }

  var passwordString = [];

  if (lowerCaseBoolean) {
    passwordString = passwordString.concat(lowerCaseLetters);
  }
  
  if (upperCaseBoolean) {
    passwordString = passwordString.concat(upperCaseLetters);
  }

  if (numberBoolean) {
    passwordString = passwordString.concat(numbers);
  }

  if (specialCharacterBoolean) {
    passwordString = passwordString.concat(specialCharacters);
  }



  var generatedPassword = [];


  for (i = 0; i < length; i++) {
    var characterNumber = Math.floor(Math.random() * passwordString.length);
    generatedPassword += passwordString[characterNumber];
  }

  return generatedPassword;

}
