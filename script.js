var userInput = document.querySelector('#userPasswordNew');
var generate = document.querySelector("#generate");
var submissionResponseEl = document.querySelector("#response");

//action when cliked on button
function showPassword(event) {
    //prevent default action
    event.preventDefault();
    
    var password = "Your password is " + userInput.value
    submissionResponseEl.textContent = password;

}

// Add event listener to submit password
generate.addEventListener("click", showPassword);
