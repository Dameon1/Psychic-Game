'use strict';
// A variable that holds and array for computer choices
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables to store wins and losses,
let wins = 0;
let losses = 0;
let userGuesses = [];
let guessesLeft;
let computerGuess;
let userGuess;

//Function that checks if player loses.
let checkForLose = function () {
  if (guessesLeft <= 0) {
    alert('You Lose!');
    losses += 1;
    document.querySelector('#losses').innerHTML = losses;
    guessesLeft = 9;
    userGuesses = [];
    gameStart();
  }
};

//Function that checks for wins
let checkForWin = function (x, y) {
  guessesLeft -= 1;  
  if (x === y){
    alert('You Win!');
    wins++;
    document.querySelector('#wins').innerHTML = wins;
    userGuesses = [];
    gameStart();
  }
};

//Function that starts the game
let gameStart = function(){
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log('The correct answer is : ' + computerGuess);
  guessesLeft = 9;
};

//Determines if the letter has been guesses already and if it is not a letter
let isLetterUsable = function(){
  if (userGuesses.indexOf(userGuess)!== -1){
    throw alert('You already guessed that!');
  }
  if (computerChoices.indexOf(userGuess) === -1 ){
    throw alert('Not a letter!!');
  }
}; 

// This function happens everytime a user presses a key
document.onkeyup = function(event) {

  //Sets variable for userGuess
  userGuess = event.key;
    
  //Checks if letter was guessed or if not a letter
  isLetterUsable();
    
  //Puts the users guess into the front of userGuesses array by using .unshift()
  userGuesses.unshift(userGuess);
    
  //Checks to see if the user won or lost
  checkForWin(userGuess,computerGuess);
  checkForLose();
    
  //Changes the content on the screen
  document.querySelector('#guessesLeft').innerHTML = guessesLeft;
  document.querySelector('#usersGuess').innerHTML = userGuesses;
};

//Starts the game   
gameStart();