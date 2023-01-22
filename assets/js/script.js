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

// Function to prompt user for password options

function getPasswordOptions() {
  var confirmLength = "";
  var confirmLowerCase = false;
  var confirmUpperCase = false;
  var confirmNumeric = false;
  var confirmSpecialcharacters = false;

  // Prompt to confirm how many characters the user would like in their password
  var slider = document.getElementById("#lengthSelector");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  var confirmLength = prompt(
    "How many characters (between 10 and 64) would you like your password to contain?"
  );
  while (confirmLength < 10 || confirmLength > 64) {
    alert("Password length must be between 10-64 characters - Try again");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
    break;
  }

  // // Repeat back how many charactes the user will have
  // alert("Your password will have " + confirmLength + " characters");

  // getPasswordOptions();

  // Determine parameters of password

  while (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumeric &&
    !confirmSpecialcharacters
  ) {
    confirmLowerCase = confirm("Would like to include Lowercase characters?");
    confirmUpperCase = confirm(
      "would you like to include Uppercase characters?"
    );
    confirmNumeric = confirm("Would you like to include numeric characters");
    confirmSpecialcharacters = confirm(
      "Would you like to include Special characters ($@%&*, etc)?"
    );
    if (
      !confirmLowerCase &&
      !confirmUpperCase &&
      !confirmNumeric &&
      !confirmSpecialcharacters
    ) {
      alert("Password must contain at least one character type");
      break;
    }
  }

  return {
    confirmLowerCase: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters,
    numericCharacters: numericCharacters,
    specialCharacters: specialCharacters,
    length: length,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomElement = Math.floor(Math.random() * arr.length);

  return arr[randomElement];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  // Push selected character types to passwordCharacters
  var passwordCharacters = [];
  var password = "";

  if (options.confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }
  if (options.confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }
  if (options.confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
  if (options.confirmSpecialcharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var character = getRandom(passwordCharacters);
    password += character;
  }
  // Return the generated password
  return password;
}
//      (confirmLowerCase) {
//     allArrays = allArrays.concat(lowerCasedCharacters);
//   }

//   if (confirmUpperCase) {
// allArrays = allArrays.concat(confirmUpperCase)
//   }

//   if (confirmNumeric) {
//     allArrays = allArrays.concat(confirmUpperCase)
//   }
//     "click OK to confirm if you would like to include Uppercase characters"
//   );
//   var confirmNumeric = confirm(
//     "click OK to confirm if you would like to include Numeric characters"
//   );
//   var confirmSpecialcharacters = confirm(
//     "Click OK to confirm if you would like to include Special characters ($@%&*, etc)"
//   );
//   if (
//     (confirmLowerCase === false,
//     confirmUpperCase === false,
//     confirmNumeric === false,
//     confirmSpecialcharacters === false)
//   ) {
//     alert("Password must contain at least one character type");

// Return password options as an object

// alert("Your password will contain one of the character types");

// Repeat back how many charactes the user will have

// Loop if answer is outside the parameters

//Group all arrays together
// let allArrays = specialCharacters.concat(
//   numericCharacters,
//   lowerCasedCharacters,
//   upperCasedCharacters
// );
// console.log(allArrays);

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

// function getLowerCasedValue() {
//   var isChecked = document.getElementById("lowerCasedSwitch").checked;
//   if (isChecked) {
//     characterRange = characterRange.concat(lowerCasedCharacters);
//     getRandom(lowerCasedCharacters);
//     currentLength++;
//   }
// }
