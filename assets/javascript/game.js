/* declared some variables*/

/* First variable declares a prompt and a function (to be used throughout for debugging purposes*/

        var userName = prompt("What is your name?")

        function log () {

      console.log("Hi" + userName);
      console.log("Did you look");
}
/* Test of funtion working*/
        log();

/* This is the stored variable for computer choice*/
        var computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"];

/* This is an array to store the usersGuess , could be used as local or global depending */
        var usersGuess = [];

/* Variables to store wins and losses,. which are "global" attributes that don't change.*/
        var wins = 0;
        var losses = 0;

/* Function to reset the html on screen*/
/* Need to make!!*/
function reset () {

console.log("Hi" + userName);
console.log("Did you look");
}

 /* made an action happen to start the game*/
      document.onkeyup = function(event) {

/* set variables for userGuess and computerGuess*/
      var userGuess = event.key;
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

/* a random log to check if its working*/
function log () {
      console.log("Hi" + userName);
      console.log(computerGuess);
}
/* This if for logging the users guess onto the HTML */
      usersGuess.push(userGuess);
      document.querySelector("#usersGuess").innerHTML = usersGuess;

/* Setting the action in motion by asking if player wins or losses or pickes again??*/
      if ( userGuess === computerGuess) {
          console.log("yeas"),
          wins++;  log();
          reset();
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
            log(); reset();
            var htmlguessesLeft = guessesLeft;
            document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;

/*If didnt win  */

              if ( guessesLeft === 0 ) {
                console.log("lose");
                losses++; log();
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
