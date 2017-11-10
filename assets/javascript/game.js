/* declared some variables*/

/* First variable declares a prompt and a function (to be used throughout for debugging purposes*/

      var userName = prompt("What is your name?")

      function log () {
        console.log("Hi");
        console.log("Did you look" + userName);
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
        var htmlguessesLeft = 9;
        var htmlusersGuess = [];
        var guessesLeft = 9;
        console.log("working")
/* Function to reset the html on screen*/
/* Need to make!!*/
  function reset () {
     document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;
     document.querySelector("#usersGuess").innerHTML = htmlusersGuess;
     alert("Game Over");

}
 reset();
 /* made an action happen to start the game*/
      document.onkeyup = function(event) {

/* set variables for userGuess and computerGuess*/
        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

/* This if for logging the users guess onto the HTML and log to the console*/
        usersGuess.push(userGuess);
        console.log(computerGuess);
        guessesLeft--;
        document.querySelector("#usersGuess").innerHTML = usersGuess;
          if ( userGuess === computerGuess) {
          console.log("yeas"),
          wins++;
          var htmlwins = wins;
          document.querySelector("#wins").innerHTML = htmlwins;
} else {

  var htmlguessesLeft = guessesLeft;
  document.querySelector("#guessesLeft").innerHTML = htmlguessesLeft;}
  if ( guessesLeft === 0 ) {
            console.log("lose");
            losses++; log(); reset();
            var htmlLosses = losses;
            document.querySelector("#losses").innerHTML = htmlLosses;};




/* this takes away by reducing guessesLeft*/
/*If didnt win*/



} ;             /*add querySelectorfor letters picked being reset*/


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
