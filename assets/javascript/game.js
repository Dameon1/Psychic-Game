/* declared some variables*/
        var guessesLeft = 9;
        var computerChoices = ["a", "b", "c", "d","e"];
        var userGuess = ["userguess"];
        var wins = 0;
        var losses = 0;

/* made an action happen to start the game*/

      document.onkeyup = function(event) {

/* set variables for userGuess and computerGuess*/

      var userGuess = event.key;
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(userGuess);

/* Setting the action in motion by asking if player wins or losses or pickes again??*/

      if ( userGuess === computerGuess) {
          console.log("yeas"),
          wins++;

/*variables for resetting htmlValues(unset yet)*/

          var htmlwins = wins;
            document.querySelector("#wins").innerHTML = htmlwins;
          var htmlguessesLeft = guessesLeft;
            document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
/* needs querySelector for resetting letters picked*/
}



/* this takes away by reducing guessesLeft*/
      else  {
           guessesLeft--;
            console.log(guessesLeft);
            console.log(htmlguessesLeft);
            var htmlguessesLeft = guessesLeft;
            document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;

/*If didnt win  */

              if ( guessesLeft === 0 ) {
                console.log("lose");
                losses++;
                var htmlLosses = losses;
                  document.querySelector("#losses").innerHTML = htmlLosses;
                var htmlguessesLeft = 9;
                document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
                /*add querySelectorfor letters picked being reset*/
}}}

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
