
var passList = document.querySelector("#list");
var passString = document.querySelector("#keyGen");


//window.onload = function () {
    // generate random pass
    function create () {
    
    // Variables
        // blank string for generated password & blank array
        var password = "";
        var history = [];
        // randomize password length (8-16 char)
        var passLength = Math.floor((Math.random() * 9) + 8);
        console.log(passLength);
        // all possible characters as a string
        var charLibrary = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


        // for loop to create password
        for (var i = 0; i < passLength; i++) {
            password = password + charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
        }

        // add password to text field
        document.getElementById("keyGen").value = password;

        // create list item in modal & populate with latest password
        var li = document.createElement("li");
        var text = document.createTextNode(password);
        console.log(text);
        li.append(text);
        document.getElementById("list").appendChild(li);

    }
//};


// copy to clipboard
function copy () {
//  var copyValue = document.passString;
    var copyValue = document.getElementById("keyGen");
    console.log(copyValue);
    copyValue.select();
    document.execCommand("copy");
}



// Generate a random password
// function genPassword(event) {

//     for (var i = 0, n = charLibrary.length; i < passLength; i++) {
//         returnValue = returnValue + charLibrary.charAt(Math.floor(Math.random() * n));
//     }
//     console.log(returnValue);
//     return returnValue;
// }