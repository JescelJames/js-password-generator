// DEPENDENCIES // Assignment Code
var generateBtn = window.document.querySelector("#generate"); //<button>

// DATA 

// FUNCTIONS // Write password to the #password input
function generatePassword() {
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    var userPassword = "";
    var allCharacters = lowercaseAll + uppercaseAll + numbersAll + symbolsAll;
    
    var useLowercase = window.confirm("Do you want to include lowercase characters?");
    var useUppercase = window.confirm("Do you want to include uppercase characters?");
    var useNumbers = window.confirm("Do you want to include numbers?");
    var useSymbols = window.confirm("Do you want to include symbols?");

    if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
      alert("At least one character type must be selected.");
      return '';
    }

    for (var i = 0; i < length; i++) {
      var randomCharacter = Math.floor(Math.random() * allCharacters.length);
      userPassword = userPassword + allCharacters[randomCharacter];
    }

    return userPassword;
}


function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//USER INTERACTION // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
















