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
    passSpecial=true;
  } else {
    passSpecial=false;
  }

  var passLower = confirm("Do you want lower case characters?");
  if(passLower){
    passLower=true;
  }else{
    passLower=false;
  }

  var passUpper = confirm("Do you want upper case characters?");
  if(passUpper){
    passUpper=true;
  }else{
    passUpper=false;
  }

  var passNum = confirm("Do you want numbers?")
  if(passNum){
    passNum=true;
  }else{
    passNum=false;
  }

  console.log(passLength + passSpecial)
  return "Generated Password";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
