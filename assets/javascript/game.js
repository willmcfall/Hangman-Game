
// Creates variable and establishes an inital value of zero for wins
var numWins = 0;
// Creates variable and establishes an inital value of zero for losses
var numLosses = 0;
// Creates variable and establishes an inital value of ten for number of guesses
var numGuesses = 10;
// Creates variable and establishes an inital value of ten for number of guesses
var numRemaining = 0;

// Creates variable that holds the letter guessed by the user
var guessLetter = "";

// Creates a variables that will hold the blank spaces for word to be guessed
var blankSpaces = "";


// Creates an array that holds all words that could be potentially used
var potentialWord = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango Cluster Princess","Abradolf Lincler","Adjudicator Rick","Agency Director","Alan Rails","Albert Einstein","Alexander","Alien Googah","Alien Morty","Alien Rick","Amish Cyborg",
"Annie","Antenna Morty","Antenna Rick","Ants in my Eyes Johnson", "Mr Poopy Butthole"];

// Creates randomized word that holds the current word to be guessed
var actualWord = potentialWord[Math.floor(Math.random() * potentialWord.length)];

// Awaits for user to click button
function myFunction(){
console.log(actualWord)
for (i = 0; i < actualWord.length; i++) {
  var x = actualWord.charAt(i);

  if (x === " " || x === "/'") {
    blankSpaces += " - ";
  } else {
    blankSpaces += " _ ";
  }
}

// Prompts use to guess a letter
document.getElementById("wins").innerHTML = "Number of Wins: " + numWins;
document.getElementById("loses").innerHTML = "Number of Losses: " + numLosses;
document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces;
var guessLetter = prompt("Please guess a letter!");
document.getElementById("guesses").innerHTML = "Number of Guesses Remaining: " + numGuesses;
document.getElementById("already").innerHTML = "Letters Already Guessed: " + guessLetter + " , ";


}












