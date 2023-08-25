// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Array definitions remain unchanged...

// Function to prompt user for password options
function getPasswordOptions() {
  // Initializing an empty array to store selected character sets
  var selectedChars = [];

  // Prompting user for the length of the password
  var length = parseInt(prompt("Choose a password length between 8 and 128 characters."));

  // Checking if length is valid
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Please choose a valid length!");
      return;
  }

  // Confirming each character type inclusion
  if (confirm("Do you want lowercase characters?")) {
      selectedChars = selectedChars.concat(lowerCasedCharacters);
  }

  if (confirm("Do you want uppercase characters?")) {
      selectedChars = selectedChars.concat(upperCasedCharacters);
  }

  if (confirm("Do you want numeric characters?")) {
      selectedChars = selectedChars.concat(numericCharacters);
  }

  if (confirm("Do you want special characters?")) {
      selectedChars = selectedChars.concat(specialCharacters);
  }

  // Ensure that at least one character type is selected
  if (selectedChars.length === 0) {
      alert("You should select at least one character type!");
      return;
  }

  return {
      length: length,
      characters: selectedChars
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index for the array
  var randomIndex = Math.floor(Math.random() * arr.length);

  // Return the randomly selected element
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  // Fetching password criteria from user
  var options = getPasswordOptions();

  // Check if user cancelled the input
  if (!options) {
      return;
  }

  // Initializing the resultant password variable
  var password = "";

  // Generating a password based on the selected criteria
  for (var i = 0; i < options.length; i++) {
      password += getRandom(options.characters);
  }

  return password;
}

// References and event listener remain unchanged...


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);