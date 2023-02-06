// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable Declaration
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialcharacters;
var masterCharacterArray = [];

// Function to prompt user for password options

// Prompt to confirm how many characters the user would like in their password
function getPasswordOptions() {
  var confirmLength = prompt(
    "How many characters (between 10 and 64) would you like your password to contain?"
  );

  if (isNaN(confirmLength)) {
    alert("Please enter a proper number");
    return null;
  }

  if (confirmLength < 10 || confirmLength > 64) {
    alert("Password length must be between 10-64 characters - Try again");
    return null;
  }

  // var confirmLength = prompt(
  //   "How many characters would you like your password to contain?"
  // );
  //return confirmLength;
  //}

  // Determine parameters of password
  var confirmLowerCase = confirm(
    "click OK to confirm if you would like to include Lowercase characters"
  );
  var confirmUpperCase = confirm(
    "click OK to confirm if you would like to include Uppercase characters"
  );
  var confirmNumeric = confirm(
    "click OK to confirm if you would like to include Numeric characters"
  );
  var confirmSpecialcharacters = confirm(
    "Click OK to confirm if you would like to include Special characters ($@%&*, etc)"
  );

  if (
    confirmLowerCase +
      confirmUpperCase +
      confirmNumeric +
      confirmSpecialcharacters ===
    0
  ) {
    alert("Password must contain at least one character type");
    return null;
  } else {
    if (confirmUpperCase) {
      masterCharacterArray = [...masterCharacterArray, ...upperCasedCharacters];
    }
    if (confirmLowerCase) {
      masterCharacterArray = [...masterCharacterArray, ...lowerCasedCharacters];
    }
    if (confirmNumeric) {
      masterCharacterArray = [...masterCharacterArray, ...numericCharacters];
    }
    if (confirmSpecialcharacters) {
      masterCharacterArray = [...masterCharacterArray, ...specialCharacters];
    }
    // options.confirmLowerCase = lowerCasedCharacters;
    // options.confirmUpperCase = upperCasedCharacters;
    // options.confirmNumeric = numericCharacters;
    // options.confirmSpecialcharacters = specialCharacters;

    var randomPassword = "";
    // run your random index function here
    for (let i = 0; i < Number(confirmLength); i++) {
      const randomCharacter = getRandom(masterCharacterArray);
      randomPassword = randomPassword.concat(randomCharacter);
    }

    return randomPassword;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
}

// Function to generate password with user input
function generatePassword() {
  // var allArrays = [];

  let returnedValue = getPasswordOptions();
  if (returnedValue === null) {
    return generatePassword();
  }

  return returnedValue; // Turn the array elements into a string of characters. This is what will show in the text area of the webpage
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
