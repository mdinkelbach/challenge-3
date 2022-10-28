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

  let lowerCase = " ";
  let upperCase = " ";
  let numbers = " ";
  let special = " ";
  
  let characterLimit = window.prompt(`How many characters? Must be between 8 and 128.`)

  let limitNum = parseInt(characterLimit);
  
  if (limitNum < 8 || limitNum > 128 || typeof limitNum ==! "number") {
    window.alert(`Invalid Input`);
    limitNum = " "
  } else {
    lowerCase = window.confirm(`Do you want lower case characters?`)
    upperCase = window.confirm(`Do you want upper case characters?`)
    numbers = window.confirm(`Do you want numbers?`)
    special = window.confirm(`Do you want special characters?`)
  }

  let lowerCaseInput = `abcdefghijklmnopqrstuvwxyz`
  let upperCaseInput = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  let numberInput = `0123456789`
  let specialInput =` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`

  function randomizer(length) {
    let result           = '';
    let characters       = '';

    if (lowerCase) {
      characters = characters.concat(lowerCaseInput);
    };
    
    if (upperCase) {
      characters = characters.concat(upperCaseInput);
    };

    if (numbers) {
      characters = characters.concat(numberInput);
    };

    if (special) {
      characters = characters.concat(specialInput);
    };

    let charactersLength = characters.length;

    for (let i = 0; i < limitNum; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    //console.log(result);

    return result;
  }

  randomizer();

}
