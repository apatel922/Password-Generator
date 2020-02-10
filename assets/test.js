
var passList = document.querySelector("#list");
var passString = document.querySelector("#keyGen");

console.log(Math.floor(Math.random()* 8));
console.log(Math.random() + 1);


// Main Fxn
function create () {
    // Variables:
    // 1) blank string for generated password & blank array
    var password = "";
    var history = [];
    // 2) randomize password length (between 8-16 char)
    var passLength = Math.floor((Math.random() * 9) + 8);
    console.log(passLength);
    // 3) all possible characters as a string
    var charLibrary = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


    // For-loop to Create Password
    for (var i = 0; i < passLength; i++) {
        password = password + charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
    }

    // Add Password to Text Field
    document.getElementById("keyGen").value = password;

    // All Generated Passwords to Modal
    var li = document.createElement("li");
    var text = document.createTextNode(password);
    console.log(text);
    li.append(text);
    document.getElementById("list").appendChild(li);

}



// Copy to Clip
function copy () {
//  var copyValue = document.passString;
    var copyValue = document.getElementById("keyGen");
    console.log(copyValue);
    copyValue.select();
    document.execCommand("copy");
}

