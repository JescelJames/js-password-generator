// DEPENDENCIES 
var generateButton = document.getElementById('generateButton'); //<button id="generateButton" class="btn">

//DATA 


//FUNCTIONS 
function generatePassword() { 
    //Prompt for length
    var passwordLength;

    while (true) {
        passwordLength = prompt("Enter the desired length of at least 8 characters and no more than 128 characters");
    
        // Convert passwordLength to a number
        passwordLength = parseInt(passwordLength, 10);
    
        if (passwordLength >= 8 && passwordLength <= 128) {
            // If the length is valid, exit the loop
            break;
        } else {
            // Alert the user and repeat the loop
            alert("Please choose a password length between 8 and 128 characters!");
        }
    }


    // var passwordLength = prompt("Enter the desired length of at least 8 characters and no more than 128 characters");
    // if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    //   alert("Please choose password length between 8 and 128 characters!")
    // } else {

    // }
   
    
    //Confirmation of character types
    var useLowercase = confirm("Do you want to include lowercase characters?");
    var useUppercase = confirm("How about uppercase characters? Do you want to include them?");
    var useNumbers = confirm("Would you like to have numbers in your password?");
    var useSymbols = confirm("Lastly, do you want to include symbols?");
    //Validation 
    if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
      alert("At least one character type must be selected.");
      return '';
    }
    

    //Possible characters
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

    //Create a string of possible characters
    var allCharacters = lowercaseAll + uppercaseAll + numbersAll + symbolsAll;
    //Randomized allCharacters.length
    for (var i = 0; i < length; i++) {
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
















