// VARIABLES
var wins = document.getElementById("wins");
wins.textContent = 0;

var losses = document.getElementById("losses");
losses.textContent = 0;

var guessesLeft = document.getElementById("guessesLeft");
var guessCount = 10;

var userGuesses = document.getElementById("userGuesses");
var guessList = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var isGameOver = false;

// FUNCTIONS
// Computer generates a random letter
function generateLetter() {
    return computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

// game resets on win or loss
function gameOver() {
    isGameOver = false

    guessCount = 10
    guessesLeft.textContent = guessCount;

    guessList.length = 0;
    userGuesses.textContent = guessList;

    generateLetter();
}

// ACTIVE CODE
// call fxn to generate computer's letter
generateLetter();

// user guesses a letter, it is added to userGuesses element, and guessesLeft decreases by 1
document.onkeyup = function (event) { 
    let userInput = event.key;
    if (guessList.indexOf(userInput) === -1) {
        guessList.push(userInput)
        userGuesses.textContent = guessList;
        guessCount--;
        guessesLeft.textContent = guessCount;
    } else {
        alert("You already guessed '" + userInput + "'. Try another letter.")
    }

    // if the user's guess equals the computer's guess then wins increases by 1
    if (userInput === computerLetter) {
        wins.textContent = parseInt(wins.textContent) + 1;
        var isGameOver = true;
        console.log(typeof(parseInt(wins.textContent)));
    } else if (guessesLeft.textContent < 1) {
        losses.textContent = parseInt(losses.textContent) + 1;
        var isGameOver = true;
    }
    
    if (isGameOver) {
        gameOver();
    }
}