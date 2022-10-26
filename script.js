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
  
  let characterLimit = window.prompt(`How many characters? Must be between 8 and 128.`)

  let limitNum = parseInt(characterLimit);
  
  if (limitNum < 8 || limitNum > 128 || typeof limitNum ==! "number") {
    window.alert(`Invalid Input`);
    limitNum = " "
  } else {
    let lowerCase = window.confirm(`Do you want lower case characters?`);
    let upperCase = window.confirm(`Do you want upper case characters?`);
    let numbers = window.confirm(`Do you want numbers?`);
    let special = window.confirm(`Do you want special characters?`);
  }

  let lowerCaseInput = `abcdefghijklmnopqrstuvwxyz`
  let upperCaseInput = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  let numberInput = `0123456789`
  let specialInput =` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`

  function makeid(length) {
    let result           = '';
    let characters       = '';

    if (lowerCase) {
      let characters = characters.join(lowerCaseInput);
    };

    if (upperCase) {
      let characters = characters.join(upperCaseInput);
    };

    if (number) {
      let characters = characters.join(numberInput);
    };

    if (special) {
      let characters = characters.join(specialInput);
    };

    console.log(characters);

    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
