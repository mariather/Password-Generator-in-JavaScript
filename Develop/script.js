
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = "!@#$%^&*()_-=+."
var numberCharacters = "123456789"

function generatePassword() {
  console.log("heyyou!");

  return "Generated password will go here";
}

function writePassword() {
  var password = ""
  var passwordLength = prompt("insert password length:", "Enter a value 8-128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
  }
  var uppercase = confirm("Do you want to include: uppercase")
  var lowercase = confirm("Do you want to include: Lowercase")
  var special = confirm("Do you want to include: special characters")
  var numbers = confirm("Do you want to include: numbers")
  for (var i = 0; i < passwordLength; i++) {


    if (lowercase && password.length<passwordLength) {
      var position = Math.floor(Math.random() * 26)
      console.log(position)
      password = password + lowercaseCharacters[position]

    }


    if (uppercase && password.length<passwordLength) {
      var position = Math.floor(Math.random() * 26)
      console.log(position)
      password = password + upperCaseCharacters[position]

    }

    if (numbers && password.length<passwordLength) {
      var position = Math.floor(Math.random() * 9)
      console.log(position)
      password = password + numberCharacters[position]

    }

    if (special && password.length<passwordLength) {
      var position = Math.floor(Math.random() * 15)
      password = password + specialCharacters[position]

    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//event listener to generate button
generateBtn.addEventListener("click", writePassword);
