// VARIABLES
var wins = document.getElementById("wins");

var losses = document.getElementById("losses");

var guessesLeft = document.getElementById("guessesLeft");

var userGuesses = document.getElementById("userGuesses");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var isGameOver = false;

// Assigning scores and guesses initial values
wins.textContent = 0;

losses.textContent = 0;

guessesLeft.textContent = 10;

// userGuesses.textContent = keystrokes.toString();

// Computer generates a random letter
function generateLetter() {
    return computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

generateLetter();
console.log("computer letter: " + computerLetter);

function gameOver() {
    
    guessesLeft.textContent = 10;
    
    generateLetter();
    console.log("new computer letter: " + computerLetter);

}

// user guesses a letter, it is added to userGuesses element, and guessesLeft decreases by 1
document.onkeyup = function (event) {
    let userInput = event.key;
    userGuesses.textContent += userInput;
    guessesLeft.textContent--;
    // console.log(losses.textContent);

    // if the user's guess === the computer's guess then wins increases by 1
    if (userInput === computerLetter) {
        wins.textContent++;
        var isGameOver = true;
    }
    else if (guessesLeft.textContent < 1) {
        losses.textContent++;
        var isGameOver = true;
    }
    console.log(isGameOver);
    if (isGameOver) {
        gameOver();
    }
}

