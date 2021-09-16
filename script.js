// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("hey you clicked the button");

  var passLength = prompt("How long do you want the Password");

  if (passLength > 128){
    window.alert("Please enter value below 129");
    return;
  } else if (passLength < 8){
    window.alert("Please enter value above 7");
    return;
  }else{
    
  }

  var passSpecial = confirm("do you want special characters?");
  if (passSpecial){
    passSpecial="!@#$%^&*()_+";
  } else {
    passSpecial=false;
  }

  var passLower = confirm("Do you want lower case characters?");
  if(passLower){
    passLower="abcdefghijklmnopqrstuvwxyz";
  }else{
    passLower=false;
  }

  var passUpper = confirm("Do you want upper case characters?");
  if(passUpper){
    passUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }else{
    passUpper=false;
  }

  var passNum = confirm("Do you want numbers?")
  if(passNum){
    passNum="1234567890";
  }else{
    passNum=false;
  }

  for (var i=0; i< passLength; i++){
    var randomNumber = Math.floor(Math.random() * (passSpecial.length + passLower.length + passUpper.length + passNum.length));
    password += passSpecial.substring(randomNumber, randomNumber + 1) + passLower.substring(randomNumber, randomNumber + 1) + passUpper.substring(randomNumber, randomNumber + 1) + passNum.substring(randomNumber, randomNumber + 1);
  }

  return password;  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
