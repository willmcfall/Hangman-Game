// Establishes an inital value of zero for wins and losses
var numWins = 0;
var numLosses = 0;
var actualWord ="Ricky Moriarty"
var guessLetter = "" 

// Awaits for user to click button
function myFunction(){
// Prompts use to guess a letter
document.getElementById("wins").innerHTML = "Number of wins: " + numWins;
document.getElementById("loses").innerHTML = "Number of losses: " + numLosses;
var guessLetter = prompt("Please guess a letter!")

}





