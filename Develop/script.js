// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Define arrays of possible characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Prompt user for password length
  var passwordLength = prompt("Enter password length (between 8 and 128):");

  // Validate user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  // Prompt user for character types to include
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Validate user input
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // Build array of characters to use based on user input
  var charArray = [];
  if (useLowercase) {
    charArray = charArray.concat(Array.from(lowercaseChars));
  }
  if (useUppercase) {
    charArray = charArray.concat(Array.from(uppercaseChars));
  }
  if (useNumeric) {
    charArray = charArray.concat(Array.from(numericChars));
  }
  if (useSpecial) {
    charArray = charArray.concat(Array.from(specialChars));
  }

  // Generate password by selecting random characters from array
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    password += charArray[randomIndex];
  }

  return password;
  console.log(password);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
