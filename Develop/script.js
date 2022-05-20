// Assignment code here
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// password length prompt function
var passwordLength = function() {
  // ask password length
   var lengthPrompt = window.prompt("Choose Password length (Pick a value between 8 and 128)");
  
  //  if empty repeat until valid
   if (lengthPrompt === "" || lengthPrompt === null || lengthPrompt <= 7 || lengthPrompt >= 129) {
     window.alert("Your need to enter a valid answer");
     return passwordLength();
   }
   //  convert string to numbers
   lengthPrompt = parseInt(lengthPrompt);
   //  Log result 
   console.log(lengthPrompt)
  }

// include lowercase characters prompt
var lowercaseChar = function() {
  // ask to include lowercase
  var lowercasePrompt = window.prompt("Include lowercase letters (YES or NO)")

  //  if empty repeat until valid
  if (lowercasePrompt === "" || lowercasePrompt === null) {
    window.alert("Your need to enter a valid answer");
    return lowercaseChar();
  }

  // turn into lowercase for ease of coding
  lowercasePrompt = lowercasePrompt.toLowerCase();

  if (lowercasePrompt === "yes") {
    return true;
  }
  else {
    return false;
  }
}

// include uppercase prompt
var uppercaseChar = function() {
var uppercasePrompt = window.prompt("Include uppercase letters (YES or NO)")

  //  if empty repeat until valid
  if (uppercasePrompt === "" || uppercasePrompt === null) {
    window.alert("Your need to enter a valid answer");
    return uppercaseChar();
  }

  // turn into lowercase for ease of coding
  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercasePrompt === "yes") {
    return true;
  }
  else {
    return false;
  }
}

// include numbers prompt
var numberChar = function() {
  var numberPrompt = window.prompt("Include numbers (YES or NO)")
  
    //  if empty repeat until valid
    if (numberPrompt === "" || numberPrompt === null) {
      window.alert("Your need to enter a valid answer");
      return numberChar();
    }
  
    // turn into lowercase for ease of coding
    numberPrompt = numberPrompt.toLowerCase();
  
    if (numberPrompt === "yes") {
      return true;
    }
    else {
      return false;
    }
  }

// include special prompt
var specialChar = function() {
  var specialPrompt = window.prompt("Include special characters (YES or NO)")
  
    //  if empty repeat until valid
    if (specialPrompt === "" || specialPrompt === null) {
      window.alert("Your need to enter a valid answer");
      return specialChar();
    }
  
    // turn into lowercase for ease of coding
    specialPrompt = specialPrompt.toLowerCase();
  
    if (specialPrompt === "yes") {
      return true;
    }
    else {
      return false;
    }
  }

// when the generate passowrd function is called 
function generatePassword() {
  passwordLength();
  
  // if lowercase prompt equals true, include lowercase
  if (lowercaseChar()) {
   console.log("include lowercase")
  }

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
