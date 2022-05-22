// Assignment code here
// function to create an array of numbers between set high and low found from a youtube tutorial 
function arrayFromLowToHigh(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
// character codes for generator
var lowercaseCharCodes = arrayFromLowToHigh(97, 122)
var uppercaseCharCodes = arrayFromLowToHigh(65, 90)
var numberCharCodes = arrayFromLowToHigh(48, 57)
var specialCharCodes = arrayFromLowToHigh(33, 47).concat( // found on MDN how to connect arrays
  arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )

// password length prompt function
var passwordLengthPrompt = function() {
  // ask password length
   var lengthPrompt = window.prompt("Choose Password length (Pick a value between 8 and 128)");
  
  //  if empty repeat until valid
   if (lengthPrompt === "" || lengthPrompt === null || lengthPrompt <= 7 || lengthPrompt >= 129) {
     window.alert("Your need to enter a valid answer");
     return passwordLengthPrompt();
   }
   //  convert string to numbers
   lengthPrompt = parseInt(lengthPrompt);

   // subtract 1 becuase later array starts at 0
    return lengthPrompt - 1

  }

// include lowercase characters prompt
var includeLowercaseChar = function() {
  // ask to include lowercase
  var lowercasePrompt = window.prompt("Include lowercase letters (YES or NO)")

  //  if empty repeat until valid
  if (lowercasePrompt === "" || lowercasePrompt === null) {
    window.alert("Your need to enter a valid answer");
    return includeLowercaseChar();
  }

  // turn into lowercase for ease of coding
  lowercasePrompt = lowercasePrompt.toLowerCase();

  // return true or false for yes or no
  if (lowercasePrompt === "yes") {
    return true;
  }
  else {
    return false;
  }
}

// include uppercase prompt
var includeUppercaseChar = function() {
var uppercasePrompt = window.prompt("Include uppercase letters (YES or NO)")

  //  if empty repeat until valid
  if (uppercasePrompt === "" || uppercasePrompt === null) {
    window.alert("Your need to enter a valid answer");
    return includeUppercaseChar();
  }

  // turn into lowercase for ease of coding
  uppercasePrompt = uppercasePrompt.toLowerCase();

  // return true or false for yes and no
  if (uppercasePrompt === "yes") {
    return true;
  }
  else {
    return false;
  }
}

// include numbers prompt
var includeNumberChar = function() {
  var numberPrompt = window.prompt("Include numbers (YES or NO)")
  
    //  if empty repeat until valid
    if (numberPrompt === "" || numberPrompt === null) {
      window.alert("Your need to enter a valid answer");
      return includeNumberChar();
    }
  
    // turn into lowercase for ease of coding
    numberPrompt = numberPrompt.toLowerCase();
  
    // return true or false for yes and no
    if (numberPrompt === "yes") {
      return true;
    }
    else {
      return false;
    }
  }

// include special prompt
var includeSpecialChar = function() {
  var specialPrompt = window.prompt("Include special characters (YES or NO)")
  
    //  if empty repeat until valid
    if (specialPrompt === "" || specialPrompt === null) {
      window.alert("Your need to enter a valid answer");
      return includeSpecialChar();
    }
  
    // turn into lowercase for ease of coding
    specialPrompt = specialPrompt.toLowerCase();
  
    // return true or false for yes and no
    if (specialPrompt === "yes") {
      return true;
    }
    else {
      return false;
    }
  }

// when the generate passowrd function is called 
var generatePassword = function() {
  // variable to store prompt result
  var lengthPrompt = passwordLengthPrompt();
  
  //empty array to store added arrays
  var charCodes = []
  // if lowercase prompt equals true, include lowercase
  if (includeLowercaseChar()) {
   console.log("include lowercase")
   charCodes = charCodes.concat(lowercaseCharCodes)
  }
  // if uppercase prompt equals true, include uppercase
  if (includeUppercaseChar()) {
    console.log("include uppercase")
    charCodes = charCodes.concat(uppercaseCharCodes)
   }// if number prompt equals true, include number
  if (includeNumberChar()) {
    console.log("include number")
    charCodes = charCodes.concat(numberCharCodes)
   }// if special prompt equals true, include special
  if (includeSpecialChar()) {
    console.log("include special")
    charCodes = charCodes.concat(specialCharCodes)
   }
  //  if nothing is selected, repeat until valid
  if (charCodes.length === 0)  {
    window.alert("Select atleast one valid option")
  }
  
// variables needed for loop
var charCodeLength = charCodes.length
var passwordCharacters = []
// loop for random number and convert number into a string using character
for (var i = 0; i <= lengthPrompt; i++) { // code found in a youtube tutorial 
    var characterCode = charCodes[Math.floor(Math.random() * charCodeLength)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  console.log(passwordCharacters)
  // turn the array into a string
  return passwordCharacters.join('')
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
