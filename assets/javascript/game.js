




/* DISCLAIMER --
//First JS try..

/*Start File*/

/* First variables declares a prompt and a function (to be used throughout for debugging purposes*/

let userName = prompt("What is your name?")

/* This is the stored variables for computer choice*/
let computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"];

/* This is an array to store the usersGuess , could be used as local or global depending */

/* variables to store wins and losses,. which are "global" attributes that don't change.*/
  let wins = 0;
  let losses = 0;
  let userGuesses = [];
  let guessesLeft = 9;
  let computerGuess;    
  let userGuess;



  let checkForLose = function() {
    guessesLeft--;
    if (guessesLeft<=0) {
    alert("You Lose!")
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    guessesLeft = 9;
    }
  };

  let checkForWin = function(x,y){
    if (x === y){
      alert("You Win!");
      wins++;
      document.querySelector("#wins").innerHTML = wins;
      guessesLeft = 9;
    }
    else {
      alert("Try Again");
    }
  }


  let gameStart = function(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }


document.onkeyup = function(event) {
 

/* set variabless for userGuess and computerGuess*/
        userGuess = event.key;
        checkForWin(userGuess,computerGuess);
        checkForLose();
        usersGuess.push(userGuess);
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        }



/*
     if ( u) {
          guessesLeft--;
          document.querySelector("#usersGuess").innerHTML = usersGuess;

          console.log(guessesLeft);
          document.querySelector("#guessesLeft").innerHTML = guessesLeft; };

      if ( guessesLeft === 0) {
        losses++;
      };
}
/*reset goes here*/





      // Set the inner HTML contents of the #game div to our html string





/*


}}
    /*    if ( guessesLeft === 0) {
          losses--;
        }}
/*else {
reset();
  let htmlguessesLeft = guessesLeft;
  document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft};
  if ( guessesLeft === 0 ) {
            console.log("lose");
            losses++; log(); reset();
            let htmlLosses = losses;
            document.querySelector("#losses").innerHTML = htmlLosses;}

            "<p>You chose: " + userGuess + "</p>" +
            "<p>The computer chose: " + computerGuess + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>ties: " + guessesLeft + "</p>";


/* this takes away by reducing guessesLeft*/
/*If didnt win*/



           /*add querySelectorfor letters picked being reset*/


      /*determines {guesses left counter: a number counter that goes down if wrong}
      { show player guesses: An array that uses the .push feature
        and display it on screen}
      {wins++ losses--}*/

// Start Game
// Player picks a letter to start game
//Computer picks a letter
// letters are then compared , action taken, results
//game over


//nonworking key event for  displayed wins

/*
      let htmllettersPicked = guessed;
      document.querySelector("#guessesLeft").innerHTML = guessed;
      document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
      document.querySelector("#wins").innerHTML = htmlwins;
      document.querySelector("#losses").innerHTML = htmllosses;


  /*determines {guesses left counter: a number counter that goes down if wrong}
  { show player guesses: An array that uses the .push feature
    and display it on screen}
  {wins++ losses--}*/

/* Function to reset the html on screen*/
/* Need to make!!*/

/*     let htmlguessesleft = 9;
     document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
     let htmlusersGuess = [];
     document.querySelector("#usersGuess").innerHTML = htmlusersGuess;
     alert("Game Over");

}
 reset();
 /* made an action happen to start the game*/