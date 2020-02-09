
// Create variables for HTML elements
var textField = document.querySelector("#keyGen");
var createBtn = document.querySelector("#createButton");
var copyBtn = document.querySelector("#copyButton");

var returnValue = "";


console.log(textField);
console.log(createBtn);
console.log(copyBtn);


// Generate a random password
function genPassword(event) {
    var passLength = Math.floor((Math.random() * 9) + 8);
    var charLibrary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?";

    for (var i = 0, n = charLibrary.length; i < passLength; i++) {
        returnValue = returnValue + charLibrary.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
}


// Passing genPassword into click
createBtn.addEventListener("click", genPassword);


// Overwrite placeholder text
function overWrite () {
    document.getElementById("keyGen").value = returnValue;
};


console.log(overWrite());

