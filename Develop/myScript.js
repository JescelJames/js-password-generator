// DEPENDENCIES // Assignment Code
var generateButton = document.getElementById('generateButton'); //<button id="generateButton" class="btn">


//DATA 

    var possibleCharacters = " ";
    // var allCharacters = lowercaseAll + uppercaseAll + numbersAll + symbolsAll;

//FUNCTIONS // Write password to the #password input
  function generatePassword() { 
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
     
    //prompt for length
    var passwordLength = prompt("Enter the desired length of at least 8 characters and no more than 128 characters");
      
    //validation of password length
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
      alert("Please choose password length between 8 and 128 characters!")
      
    }
   
    //Confirm character types
    var useUppercase = confirm("Do you want to include uppercase characters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSymbols = confirm("Do you want to include symbols?");
    var useLowercase = window.confirm("Do you want to include lowercase characters?");
      if (useLowercase) {
        possibleCharacters += lowercase;
        }
    if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
      alert("At least one character type must be selected.");
      return '';
    }

    for (var i = 0; i < length; i++) {
      var randomCharacters = Math.floor(Math.random() * allCharacters.length);
      userPassword = userPassword + allCharacters[randomCharacters];
    }

    return userPassword;
}




  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//USER INTERACTION
  //Event listener for #generateButton.
  generateButton.addEventListener("click", writePassword);
















