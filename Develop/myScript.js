// DEPENDENCIES 
var generateButton = document.getElementById('generateButton'); //<button id="generateButton" class="btn">

//DATA 


//FUNCTIONS // Write password to the #password input
function generatePassword() { 
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    
    
    //Prompt for length
    var passwordLength = prompt("Enter the desired length of at least 8 characters and no more than 128 characters");
    
    
    //Validation of password length
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
      alert("Please choose password length between 8 and 128 characters!")
    }
   

    //Confirmation of character types
    var useLowercase = confirm("Do you want to include lowercase characters?");
    var useUppercase = confirm("Do you want to include uppercase characters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSymbols = confirm("Do you want to include symbols?");
    
    
    //Validation 
    if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
      alert("At least one character type must be selected.");
      return '';
    }
    

    //Create a string of possible characters

    var allCharacters = lowercaseAll + uppercaseAll + numbersAll + symbolsAll;
        // var possibleCharacters = '';
        // if (useLowercase) possibleCharacters += lowercase;
        // if (useUppercase) possibleCharacters += uppercase;
        // if (useNumbers) possibleCharacters += numbers;
        // if (useSymbols) possibleCharacters += symbols;
    
    
    // if (useLowercase) {
      //   possibleCharacters += lowercase;
      //   }


    for (var i = 0; i < length; i++) {
      //Randomized allCharacters.length
      var randomCharacters = Math.floor(Math.random() * allCharacters.length);
      
      userPassword += allCharacters[randomCharacters];
    }

    return userPassword;
}



function createPassword() {
    var newPassword = generatePassword();
  
    var passwordText = document.getElementById('passwordTextArea');
  
    passwordText.value = newPassword;
}


//USER INTERACTION//Event listener for #generateButton.
  
generateButton.addEventListener("click", createPassword);
















