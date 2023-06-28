var userInput = document.querySelector('#userPasswordNew');
var generate = document.querySelector("#generate");
var submissionResponseEl = document.querySelector("#response");

//action when cliked on button
function showPassword(event) {
    //prevent default action
    event.preventDefault();
    console.log(event)
    var password = "Your password is " + userInput.value
    console.log(password)
    submissionResponseEl.textContent = password;

}

// Add event listener to submit password
generate.addEventListener("click", showPassword);
