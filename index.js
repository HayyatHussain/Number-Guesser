// Get the DOM elements and initialize the game
const button = document.getElementById("btn"),
outputTxt = document.getElementById("outputTxt"),
userInput = document.getElementById("inputTxt");

// Creating a variable to use for toggling between alternating functions
var click = false;

// Focus on the input field whenever the page loads
inputTxt.focus();

// Compare the user input with the random number on the first click
function firstClick () {
    click = true;
    const num = Math.floor(Math.random() * 10);
    if (userInput.value == num) {
        outputTxt.innerHTML = "You got it correct!";
    } else {
        outputTxt.innerHTML = "Incorrect! The number was " + num;
    }

// Disable the input field after submittion of the number from the user and change the innerHTML of the button
    userInput.disabled = true;
    button.innerHTML = "RETRY";
}


// To display the qualities of the second click
function secondClick () {
    userInput.disabled = false;
    button.innerHTML = "Submit";
    click = false;
    outputTxt.innerHTML = "";
    userInput.value = "";
}

// Toggle between the two functions on alternating clicks, and execute a function
btn.addEventListener('click', function() {
    if (click) {
      secondClick();  
    } else {
      firstClick();
    }
  });




