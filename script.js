// Assignment Code
var generateBtn = document.querySelector("#generate");
var chosenChars = [];
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
    passSpecial=["!","@","#","$","%","^","&","*","(",")","_","+",];
    chosenChars.push(passSpecial);
  } else {
    
  }

  var passLower = confirm("Do you want lower case characters?");
  if(passLower){
    passLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    chosenChars.push(passLower);
  }else{
    
  }

  var passUpper = confirm("Do you want upper case characters?");
  if(passUpper){
   passUpper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
   chosenChars.push(passUpper);
  }else{
    
  }

  var passNum = confirm("Do you want numbers?")
  if(passNum){
    passNum=["1","2","3","4","5","6","7","8","9","0"];
    chosenChars.push(passNum);
  }else{
    
  }
  password = [];
  // for (var i=0; i< passLength; i++){
  //   var randomNumber = Math.floor(Math.random() * (passSpecial.length + passLower.length + passUpper.length + passNum.length));
  //   password += passSpecial.substring(randomNumber, randomNumber + 1) + passLower.substring(randomNumber, randomNumber + 1) + passUpper.substring(randomNumber, randomNumber + 1) + passNum.substring(randomNumber, randomNumber + 1);
  // }
  var randomNumber = Math.floor(Math.random() * chosenChars.length);

for (var i=0; i < passLength; i++){
    password = password.push(chosenChars[randomNumber]);
    password += password.splice(randomNumber);
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
