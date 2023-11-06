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
  //booleans
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumeric = false;
  var hasSpecial = false;


   //prompts for password criteria, input required between 8 and 28 characters
   //All input should be validated

   var lowerCaseQ = confirm("Would you like to use lowercase letters?");
   var upperCaseQ = confirm("Would you like to use uppercase letters?");
   var numbersQ = confirm("Would you like to use numbers?");
   var specialCharactersQ = confirm("Would you like to use special characters?");

  //password should be generated and displayed

  for (var i = 0; i < lengthInput; i++){
    var random = Math.floor(math.random() * lowerCase.length);
    password += lowerCase[random];
  }
   console.log("password:");
   return "password";
}


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