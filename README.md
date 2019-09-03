# Psychic Game

## Overview
This is a game in which the computer generates a random letter and the user has 10 tries to guess what it is.

### A Breakdown
I created an array with the letters of the alphabet and used ``` Math.floor(Math.random() * letters.length)``` to generate a random letter. 

The user presses a key on their keyboard. The value of the letter is stored in a variable called ```userInput```. From here, two things happen. 

* An empty array has been created to store the user's guesses for the user to track. 
    * If ```userInput``` exists within that array, an alert is shown to notify the user they have already guessed that letter. 
    * If it does not exist within that array, it is added to it and displayed on the page.

* In addition to this, ```userInput``` is evaluated against the computer's letter. 
    * If the two values are equal, the user has won. The win score will increase by 1 and an alert will notify the user of their victory. 
    * If the two values are not equal, the number of guesses they have left will decrease by 1. If this count reaches 0, the user has lost. The loss score will increase by 1 and an alert will display notifying the user of their loss and informing them of the correct letter. 

Once the player has either won or lost, the game will reset. Their win and loss scores will continue to accumulate, but the guess count will reset to 10, the guess tracker will empty, and a new letter to guess will be generated.