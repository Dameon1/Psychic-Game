/* DISCLAIMER --
//First JS try..

/*Start File*/


/* This is the stored variables for computer choice*/
let computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"];

/* This is an array to store the usersGuess , could be used as local or global depending */

/* variables to store wins and losses,. which are "global" attributes that don't change.*/
  let wins = 0;
  let losses = 0;
  let userGuesses = [];
  let guessesLeft;
  let computerGuess;    
  let userGuess;



  let checkForLose = function() {
    if (guessesLeft<=0) {
    alert("You Lose!")
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    guessesLeft = 9;
    userGuesses = [];
    gameStart();
    }
  };

  let checkForWin = function(x,y){
    guessesLeft--;  
    if (x === y){
        alert("You Win!");
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        userGuesses = [];
        gameStart();
        }
      }


  let gameStart = function(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("The correct answer is : " + computerGuess);
    guessesLeft = 9;
    }


document.onkeyup = function(event) {

        /* set variabless for userGuess and computerGuess*/
        userGuess = event.key;
        userGuesses.unshift(userGuess);
        checkForWin(userGuess,computerGuess);
        checkForLose();
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        document.querySelector("#usersGuess").innerHTML = userGuesses;
        }

gameStart();
















