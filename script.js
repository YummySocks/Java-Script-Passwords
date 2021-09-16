// Assignment Code
var generateBtn = document.querySelector('#generate');
function generatePassword(){
  //Declaring values for password data
  var chosenChars = [];
  var password = "";
  // asking for a number
  var passLength = prompt('How long do you want the Password');
  // checks to see if value is between 8 and 128
  if (passLength > 128 || passLength< 8){
    window.alert('Please enter value between 8 and 128');
    return password;
  } else if ((passLength > 7) && (passLength <129)){
  } else  {
    window.alert('please enter valid number')
    return password;
  }
  //gets all the user inputs and puts them into variables
  var passNum = confirm('Do you want numbers?')
  var passSpecial = confirm('do you want special characters?');
  var passLower = confirm('Do you want lower case characters?');
  var passUpper = confirm('Do you want upper case characters?');
  // makes sure at least one option is selected
  if (!passNum && !passSpecial && !passLower && !passUpper){
    window.alert('Please select at least one option.');
    return password;
  }
  // goes through and adds a variable if one is selected otherwise it moves on
  if (passSpecial){
    passSpecial=['!','@','#','$','%','^','&','*','(',')','_','+'];
    chosenChars= [...passSpecial, ...chosenChars];
    var randomNumber = Math.floor(Math.random() * passSpecial.length);
    password += passSpecial[randomNumber];
  } 

  if(passLower){
    passLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    chosenChars= [...passLower, ...chosenChars];
    var randomNumber = Math.floor(Math.random() * passLower.length);
    password += passLower[randomNumber];
  }

  if(passUpper){
   passUpper= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   chosenChars= [...passUpper, ...chosenChars];
   var randomNumber = Math.floor(Math.random() * passUpper.length);
    password += passUpper[randomNumber];
  }

  if(passNum){
    passNum=['1','2','3','4','5','6','7','8','9','0'];
    chosenChars= [...passNum, ...chosenChars];
    var randomNumber = Math.floor(Math.random() * passNum.length);
    password += passNum[randomNumber];
  }
  var charLeft = passLength - password.length;
  
  for (var i=0; i < charLeft; i++){
  var randomNumber = Math.floor(Math.random() * chosenChars.length);
  password += chosenChars[randomNumber]; 
}
  return password;  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
