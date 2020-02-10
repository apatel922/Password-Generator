<br>

# Password Creator





### Javascript is pain.


---
<br>

## UI Layout

My favorite part of this project was creating and styling the actual webpage.  I went with a jumbotron as the main container for the password generator.  I also added a 10% margin-top which allowed for some pretty nice vertical alignment when the window is maxed out.  There is only 1 breakpoint in this project, in which the h1 and placeholder elements are reformatted, explicitly in my CSS.

Beyond that I kept styling fairly simple with a basic, high contrast color palette and took inspiration from Material Design with the drop shadows.

<br>

## Create ( )

The main function took a long time to troubleshoot.  Originally, I thought making an array with every single character, broken out by apostraphes, would be a good way of creating the character library.  Shortly after, I discovered the .charAt ( ) method, paired with the .length property.
```
for (var i = 0; i < passLength; i++) {
    password = password + charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
}
```
This For loop runs through the string set to <span style="color: #0A8C9B"> var </span><span style="color: #4AC1CE">charLibrary </span>, selecting characters at random locations  

<br>

## Copy ( )

The main function took a long time to troubleshoot.  

<br>

## All ( )

The main function took a long time to troubleshoot.  

<br>



<br>

---