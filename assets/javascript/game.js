
    var guessesLeft = [""]
    var computerChoices = ["a", "b", "c", "d","e"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;

// This function is run whenever the user presses a key.
  document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if{ userGuess === computerChoices, wins++}
     else {loses--};
};
  determines {guesses left counter: a number counter that goes down if wrong}
  { show player guesses: An array that uses the .push feature
    and display it on screen}
  {wins++ losses--}
