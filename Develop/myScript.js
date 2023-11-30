// DEPENDENCIES 
var generateButton = document.getElementById('generateButton'); //<button id="generateButton" class="btn">
// var passwordText = document.getElementById('passwordTextArea');

//DATA 
// function clearText() {
 
// passwordText.value = "";
// }

//     generateButton.addEventListener('click', clearText());


    // Clear the existing password
    
    //  document.getElementById("generateButton").addEventListener("click", function() {
    //     // Clear the text area
    //     var textArea = document.getElementById("passwordTextArea");
    //     textArea.value = '';
 

    //     // return textArea;
    
    // });



//FUNCTIONS     




 
function generatePassword() {
     
    

    
    
    
    
    //Prompt for length
    while (true) {
        passwordLength = prompt("Enter the desired length of at least 8 characters and no more than 128 characters");
    
        // Check if the prompt was cancelled
        if (passwordLength === null) {
            // Optional: Refresh the page or handle the cancellation appropriately
            // window.location.reload(); // Uncomment this to refresh the page
            return; // Or break out of the loop
        }
    
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

       
    //Confirmation of Character Types
    var useLowercase = confirm("Do you want to include LOWERCASE characters?");
    var useUppercase = confirm("How about UPPERCASE characters? Do you want to include them?");
    var useNumbers = confirm("Would you like to have NUMBERS in your password?");
    var useSymbols = confirm("Lastly, do you want to include SYMBOLS?");
    // Validations
    if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
      alert("At least one character type must be selected.");
      return '';
    }


    //Possible Characters
    var lowercaseAll = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseAll = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersAll = '0123456789';
    var symbolsAll = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    var allCharacters = '';
    if (useLowercase) allCharacters = allCharacters + lowercaseAll;
    if (useUppercase) allCharacters += uppercaseAll;
    if (useNumbers) allCharacters += numbersAll;;;
    if (useSymbols) allCharacters += symbolsAll;


    //Randomized allCharacters.length
    var userPassword = "";
    for (var i = 0; i < passwordLength; i++) {
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
















