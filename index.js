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
    // Prepare an edge-case scenario if user input is just a space/spaces/empty
    if (userInput.value.trim() === "") {
        outputTxt.innerHTML = "Enter a valid number.";
        return;
    }
    
    // Prepare another edge-case scenario if user input is > 10 and < 0
    if (userInput.value <= 10 && userInput.value >= 0 && !["+", "-", " ", "."].includes(userInput.value)) {
        click = true;
        const num = Math.round(Math.random() * 10);
        if (userInput.value == num) {
            outputTxt.innerHTML = "You got it correct!";
        } else {
            outputTxt.innerHTML = "Incorrect! The number was " + num;
        }

        // Disable the input field after submittion of the number from the user and change the innerHTML of the button
        userInput.disabled = true;
        button.innerHTML = "RETRY";

    // Text alerting the user to not use a number > 10 or < 0
    } else {
        outputTxt.innerHTML = "Please enter a valid number (between 0-10)"
        userInput.value = "";
        userInput.onfocus = () => {
            userInput.value = "";
        }
    }
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




