
    var guessesLeft = [""]
    var computerChoices = ["a", "b", "c", "d","e"];
    var userGuess = [""];
    var wins = 0;
    var losses = 0;

//working key event for wins
  document.onkeyup = function(event) {
    userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      if (userGuess === computerGuess){
          console.log("yeas"), wins++; }


var html = wins;

document.querySelector("#wins").innerHTML = html;


}

  /*determines {guesses left counter: a number counter that goes down if wrong}
  { show player guesses: An array that uses the .push feature
    and display it on screen}
  {wins++ losses--}*/
