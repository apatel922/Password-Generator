<br>

# Password Creator





### Javascript is pain.


---
<br>

## UI Layout

My favorite part of this project was creating and styling the actual webpage.  I went with a jumbotron as the main container for the password generator.  I also added a 10% margin-top which allowed for some pretty nice vertical alignment when the window is maxed out.  There is only 1 breakpoint in this project, in which the h1 and placeholder elements are reformatted, explicitly in my CSS.

Beyond that I kept styling fairly simple with a basic, high contrast color palette and took inspiration from Material Design with the drop shadows.

<br>

---
<br>

## Create ( )

The main function took a long time to troubleshoot.  Originally, I thought making an array with every single character, broken out by apostraphes, would be a good way of creating the character library.  Shortly after, I discovered the <span style="color: #BEA712">.charAt ( )</span> method, paired with the <span style="color: #BEA712">.length</span> property.

This for-loop runs through the string set to <span style="color: #0A8C9B">var </span><span style="color: #4AC1CE">charLibrary</span>, selecting characters at random spots and passing them to <span style="color: #0A8C9B">var </span><span style="color: #4AC1CE">password</span>.  
```
for (var i = 0; i < passLength; i++) {
    password = password + charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
}
```
This function repeats until password length is accounted for.  I originally had <span style="color: #4AC1CE">passLength</span> set to 8, but I decided to randomize length between 8 and 16 characters, instead.
```
var passLength = Math.floor((Math.random() * 9) + 8);

var password = "";
```
Once the for-loop is complete, we have our password string, which is assigned to <span style="color: #0A8C9B">var </span><span style="color: #4AC1CE">password</span> for the duration of this function.  The next step is to push this value to a text field in order to display it on our webpage.  

I got the suggestion to use the <span style="color: #BEA712">.value</span> property from Ernie.  It was an easy way to isolate and append the actual string that was just created.
```
document.getElementById("keyGen").value = password;
```

<br>

---
<br>

## Copy ( )

Copying to clipboard was way more straightforward, compared to password creation.  I created a new function called <span style="color: #BEA712">copy ( )</span> that has 3 tasks within it.  First, we isolate the text field with <span style="color: #BEA712">getElementById</span>.  Then, we copy the value of that field, using the <span style="color: #BEA712">.select ( )</span> method.  Lastly, we invoke the executive command of <span style="color: #BE5D12">copy</span> to get it to our clipboard.
```
function copy () {
    var copyValue = document.getElementById("keyGen");
    console.log(copyValue);
    copyValue.select();
    document.execCommand("copy");
}
```
For some reason, I could not get my global variable of <span style="color: #4AC1CE">passString</span> to work with this method.  As far as I can tell, they're calling the exact element, but no luck with it.
```
// Failed...
var passString = document.querySelector("#keyGen");
var copyValue = document.passString;

// Success...
var copyValue = document.getElementById("keyGen");
```

<br>

---
<br>

## All ( )

I added an extra feature in my Password Creator to log all of the previously generated passwords in that instance.  

<br>



<br>

---