// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //all code goes in this block
  //password character variables
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();
  var numbers = '0123456789';
  var specialCharacters = '!@#$%^&*?';
  

  //prompts for password criteria
  var lowerCaseQ = confirm("Would you like to use lowercase letters?");
  var upperCaseQ = confirm("Would you like to use uppercase letters?");
  var numbersQ = confirm("Would you like to use numbers?");
  var specialCharactersQ = confirm("Would you like to use special characters?");

 //following criteria
 if (lowerCaseQ === false && upperCaseQ === false && numbersQ === false && specialCharactersQ === false) {
  return "You must select at least one character type to meet password criteria.";
  };

  //generating passwords
  if(lowerCaseQ === true && upperCaseQ === false && numbersQ === false && specialCharactersQ === false) {
    
  }



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);