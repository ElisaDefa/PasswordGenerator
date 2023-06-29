//delcaration of variables
var generateBtn = document.querySelector("#generate");
var textOfPassword = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&/()=";
var password = "";
var banner = "";

//funcion for prompts
// Get what the user wants in a password
function getRequirements() {
var lenghtPassword = prompt("Enter the lenght of your password (between 8 and 128)");
console.log(lenghtPassword);
var lCase = confirm("Do you want lower case characters (OK/yes - CANCEL/no)");
console.log(lCase);
var uCase = confirm("Do you want upper case characters (OK/yes - CANCEL/no)");
console.log(uCase);
var nChar = confirm("numeric characters (OK/yes - CANCEL/no)");
console.log(nChar);
var specialChar = confirm("Do you want special characters (OK/yes - CANCEL/no)");
console.log(specialChar);
}

//use random() function to generate password depending on user inputs above
//Diclaimer math.random is not a secure method to do this if we need high security (using for HW purposes only
//If we want real security we need another method window.crypto.getRandomValues()

function lowercase() {
    return lowerCase[Math.floor(Math.random()*lowerCase.length)]
}
function uppercase() {
    return upperCase[Math.floor(Math.random()*upperCase.length)]
}
function numericCharacters() {
    return numbers[Math.floor(Math.random()*numbers.length)]
}
function specialC() {
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
}

// Write password to the #password input
function writePassword() {

    if (lCase==false && uCase ==false && nChar===false && specialChar==false) {
        banner == false;
    } else {
        banner == true;
    }

    if (banner == true && password>8 && password<128) {

        for (let i=0; i<lenghtPassword; i++){
            if (lCase){
                password +=randomlower();
            }
            console.log(password);
            if(uCase){
                password+=randomupper();
            }
            console.log(password);
            if(nChar){
                password+=randomnumber();
            }
            console.log(password);
            if(specialChar){
                password+=randomspecial();
            }
            console.log(password);
            if (password.length === lenghtPassword ) {
                break;
            }
        }
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getRequirements);
generateBtn.addEventListener("click", writePassword);