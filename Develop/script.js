// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA 
var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersAll = '0123456789';
var symbolsAll = "!@#$%^&*()_+=-[]\{}|;':",./<>?~``;


// FUNCTIONS
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


//USER INTERACTION
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// INITIALIZATION




// Assignment Code




}


