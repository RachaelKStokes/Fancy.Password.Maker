// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //all code goes in this block

   var password = "";

  //password character variables, at least one category is required
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();
  var numbers = '0123456789';
  var specialCharacters = '!@#$%^&*?';
  var lengthInput = 10;
  //booleans for inputs

  var lowerCaseQ = confirm("Would you like to use lowercase letters?");
  if(lowerCaseQ === true) {
    var hasLowercase = true;
  } else {
    var hasLowercase = false;
  }
  var upperCaseQ = confirm("Would you like to use uppercase letters?");
  if(upperCaseQ === true) {
    var hasUppercase = true;
  } else {
    var hasLowercase = false;
  }

  var hasNumeric = false;
  var hasSpecial = false;


   //prompts for password criteria, input required between 8 and 28 characters
   //All input should be validated

   //!! means or ! means true
   if (!hasLowercase !! !hasUppercase) {
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
   //var upperCaseQ = confirm("Would you like to use uppercase letters?");
   //var numbersQ = confirm("Would you like to use numbers?");
   //var specialCharactersQ = confirm("Would you like to use special characters?");

  //password should be generated and displayed

  for (var i = 0; i < lengthInput; i++){
    var random = Math.floor(math.random() * possibleCharacters.length);
    password += possibleCharacters[random];
  }
   console.log("password:");
   return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);