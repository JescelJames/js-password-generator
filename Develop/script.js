// DEPENDENCIES // Assignment Code
var generateBtn = window.document.querySelector("#generate"); // <button>

// DATA 




// FUNCTIONS // Write password to the #password input
function generatePassword() {
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    var userPassword = "";
    var allCharacters = lowercaseAll + uppercaseAll + numbersAll + symbolsAll;
    var useLowercase = confirm("Do you want to include lowercase characters?");

  for (var i = 0; i < length; i++) {
    var randomChar = Math.floor(Math.random() * allCharacters.length);

    userPassword = userPassword + allCharacters.substring(randomChar, randomChar + 1);
}

return userPassword;
}






// generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// function hiToUser() {
//   alert("Hi!");
// }
// hiToUser();


// function askUser() {
// prompt("Would you like to generate a password: "); 

// } 
// askUser();




//USER INTERACTION // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// INITIALIZATION













