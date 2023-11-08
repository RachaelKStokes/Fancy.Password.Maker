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
  var possibleCharacters = "";

  //prompts for password criteria, input required between 8 and 28 characters
  //All input should be validated

  var lengthInput = prompt("Choose a password length between 8 and 128 characters.");
  if (lengthInput < 8 || lengthInput > 128) {
    alert("Please choose a password length between 8 and 128 characters.");
    return;
  }
  
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

  var numericQ = confirm("Would you like to use numeric characters?");
  if (numericQ === true) {
    var hasNumeric = true;
  } else {
  hasNumeric = false;
  }

  var specialQ = confirm("Would you like to use special characters?");
  if (specialQ === true) {
    var hasSpecial = true;
  } else {
  hasSpecial = false;
  }

  //|| means or ! means true && means and
  if (!hasLowercase && !hasUppercase && !hasSpecial && !hasNumeric) {
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