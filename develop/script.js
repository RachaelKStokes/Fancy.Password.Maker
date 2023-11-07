// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //all code goes in this block

  var password = "";

  //password character variables, at least one category is required
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();
  var numericCharacters = '0123456789';
  var specialCharacters = '!@#$%^&*?';
  var lengthInput = 10;
  var possibleCharacters = "";

  //prompts for password criteria, input required between 8 and 28 characters
  //All input should be validated
  var lowerCaseQ = confirm("Would you like to use lowercase letters?");
  if (lowerCaseQ === true) {
    var hasLowercase = true;
  } else {
    hasLowercase = false;
  }
  var upperCaseQ = confirm("Would you like to use uppercase letters?");
  if (upperCaseQ === true) {
    var hasUppercase = true;
  } else {
    hasLowercase = false;
  }

  //|| means or ! means true
  if (!hasLowercase || !hasUppercase || !hasSpecial || !hasNumeric) {
    alert("Please choose at least one character type.");
    return;
  }

  //possible characters pool builder for generating random password
  if (hasLowercase) {
    possibleCharacters += lowerCase;
  }

  if (hasUppercase) {
    possibleCharacters += upperCase;
  }

  if (hasSpecial) {
    possibleCharacters += specialCharacters;
  }

  if (hasNumeric) {
    possibleCharacters += numericCharacters;
  }
  //password should be generated and displayed

  for (var i = 0; i < lengthInput; i++) {
    var random = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[random];
  }
  console.log("password:");
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);