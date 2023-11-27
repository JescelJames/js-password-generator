// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA 


// FUNCTIONS


//USER INTERACTION


// INITIALIZATION




// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
