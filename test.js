
var passList = document.querySelector("#list");


// generate random pass
function create () {

    // randomize password length (8-16 char)
    var passLength = Math.floor((Math.random() * 9) + 8);
    //console.log(passLength);

    // all possible characters as a string
    var charLibrary = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?()<>[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // blank string for generated password & blank array
    var password = "";
    var history = [];

    // for loop to create password
    for (var i = 0; i < passLength; i++) {
        password = password + charLibrary.charAt(Math.floor(Math.random() * Math.floor(charLibrary.length - 1)));
    }

    // add password to text field
    document.getElementById("keyGen").value = password;

    // create list item in modal & populate with latest password
    history.push(password);
    console.log(history);

}






// Generate a random password
function genPassword(event) {

    for (var i = 0, n = charLibrary.length; i < passLength; i++) {
        returnValue = returnValue + charLibrary.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;

}