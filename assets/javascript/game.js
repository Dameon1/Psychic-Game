


        var guessesLeft = 9;
        var computerChoices = ["a", "b", "c", "d","e"];
        var userGuess = [""];
        var wins = 0;
        var losses = 0;

    //working key event for wins
      document.onkeyup = function(event) {
        userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

          if (userGuess === computerGuess) {
              console.log("yeas"), wins++;
              var htmlwins = wins;
              document.querySelector("#wins").innerHTML = htmlwins;
            }
             else (guessesLeft--);
      var htmlguessesLeft = guessesLeft;
      document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
    }

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
