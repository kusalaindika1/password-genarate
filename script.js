// Assignment code here


var generateBtn = document.querySelector("#generate");
function randomInt(min, max) {
  if (!max){
    max = min
    min = 0
  }
  var rand =Math.random
  return Math.floor(Math.random()*(max - min) + min)
}
function getRandomitem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){
 
 let userInputs = window.prompt("how long is your password")
 var passwordLength = parseInt(userInputs)

 if ((passwordLength)){
//this code runs if i get a good password
var userWantsNumbers = window.confirm("do yo want number in your password")
 var userWantsSymbols = window.confirm("do yo want symbole in your password ")
 var userWantsUppercase = window.confirm("do yo want uppercase in your password")
 var userWantsLowercase = window.confirm("do yo want lowercase in your password")

 } 
 
else if (passwordLength < 8 || passwordLength > 128){
window.alert("password must be between 8 and 128 characters")
 return
 }
 


 var numberList = [ "0" ,"1","2" ,"3","4","5","6","7","8","9"]
 var symbolList= ["!","@","#","$","%","^" ,"&","*" ]
 var lowerCaseList =[ "a", "b","c","d","e","f","g","h","i","j","k","l"
,"m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"]
var optionCart = []

for (var i = 0; i < lowerCaseList.length; i++) {
upperCaseList[i] = lowerCaseList[i].toUpperCase()
}


if (userWantsNumbers ===true){
  optionCart.push(numberList)
}


if (userWantsSymbols ===true){
  optionCart.push(symbolList)

}

if (userWantsUppercase ===true){
  optionCart.push(upperCaseList)
}

if (userWantsLowercase ===true){
  optionCart.push(lowerCaseList)
}
if (optionCart.length === 0){
  optionCart.push(lowerCaseList)
}


var generatedPassword= ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomitem(optionCart)
  var randomchar = getRandomitem(randomList)
  generatedPassword += randomchar
}
return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
