
// A variable that holds and array for computer choices
  let computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"];

//Variables to store wins and losses,
  let wins = 0;
  let losses = 0;
  let userGuesses = [];
  let guessesLeft;
  let computerGuess;    
  let userGuess;


//Function that checks if player loses.
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
        isLetterUsable();
        userGuesses.unshift(userGuess);
        checkForWin(userGuess,computerGuess);
        checkForLose();
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        document.querySelector("#usersGuess").innerHTML = userGuesses;
        }

gameStart();





let isLetterUsable = function(){
  if (userGuesses.indexOf(userGuess)!== -1){
    throw alert("You already guessed that!")
  }

  if (computerChoices.indexOf(userGuess) === -1 ){
    throw alert("Not a letter!!");
  }
} 















