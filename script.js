// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Password parameter defaults
  let lowerCase = " ";
  let upperCase = " ";
  let numbers = " ";
  let special = " ";
  
  // Collects password length
  let characterLimit = parseInt(window.prompt(`How many characters? Must be between 8 and 128.`))
  
  // Sets password length restrictions, moving onto password parameters if allowed
  if (characterLimit < 8 || characterLimit > 128 || !(/^[0-9]+$/.test(characterLimit))) {
    window.alert(`Invalid Input: Please enter a number between 8 and 128.`);
    characterLimit = " "
  } else {
    lowerCase = window.confirm(`Do you want lower case characters?`)
    upperCase = window.confirm(`Do you want upper case characters?`)
    numbers = window.confirm(`Do you want numbers?`)
    special = window.confirm(`Do you want special characters?`)
  }

  // Error message if no paramters are selected
  if (!lowerCase && !upperCase && !numbers && !special) {
    window.alert(`You must have at least one paramter to create a password!`)
  }

  // Password parameter possibilities
  let lowerCaseInput = `abcdefghijklmnopqrstuvwxyz`
  let upperCaseInput = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  let numberInput = `0123456789`
  let specialInput =` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`

  // Builds password
  function randomizer() {
    let result           = '';
    let characters       = '';

    // Adds lowercase letters if selected
    if (lowerCase) {
      characters = characters.concat(lowerCaseInput);
    };
    
    // Adds uppercase letters if selected
    if (upperCase) {
      characters = characters.concat(upperCaseInput);
    };

    // Adds numbers if selected
    if (numbers) {
      characters = characters.concat(numberInput);
    };

    // Adds special characters if selected
    if (special) {
      characters = characters.concat(specialInput);
    };

    // Creates the password based on which parameters were selected
    for (let i = 0; i < characterLimit; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }

  return randomizer();
}
