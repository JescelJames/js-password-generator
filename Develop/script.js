// DEPENDENCIES // Assignment Code
var generateBtn = window.document.querySelector("#generate"); // <button>

// DATA 
var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersAll = '0123456789';
var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
var allowedCharacters = " ";



// FUNCTIONS // Write password to the #password input
function generatePassword() {
alert("Hi!");
prompt("Would you like to generate a password: ");
}

generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function hiToUser() {
  
}
hiToUser();


function askUser() {
  
}
askUser();




//USER INTERACTION // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// INITIALIZATION













