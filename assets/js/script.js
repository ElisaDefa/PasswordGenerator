//delcaration of variables

var generateBtn = document.querySelector("#generate");
var textOfPassword = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&/()=";
var password ="";

// Write password to the #password input

function writePassword() {

    var lenghtPassword = parseInt(prompt("Enter the lenght of your password (between 8 and 128)"));
    console.log(lenghtPassword);
    if (lenghtPassword <= 8 || lenghtPassword >= 128) {
        var warning = alert("Please chose select a lenght of your password of 8 through 128");
        return writePassword();
        console.log("lenght of pass "+lenghtPassword);
    }
    var lCase = confirm("Do you want lower case characters (OK/yes - CANCEL/no)");
    console.log(lCase);
    var uCase = confirm("Do you want upper case characters (OK/yes - CANCEL/no)");
    console.log(uCase);
    var nChar = confirm("numeric characters (OK/yes - CANCEL/no)");
    console.log(nChar);
    var specialChar = confirm("Do you want special characters (OK/yes - CANCEL/no)");
    console.log(specialChar);

    if (lCase==false && uCase==false && nChar==false && specialChar==false) {
        var warning = alert("Please chose at least one characterstic");
        return writePassword();
        
    }

    if (lCase){
        password +=lowerCase;
    }

    if(uCase){
        password+=upperCase;
    }

    if(nChar){
        password+=numbers;
    }

    if(specialChar){
        password+=specialCharacters;
    }


    var newPassword = "";
    for (let i=0; i<lenghtPassword; i++){
        var randomIndex = [Math.floor(Math.random()*password.length)];
        newPassword+= password[randomIndex];
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
