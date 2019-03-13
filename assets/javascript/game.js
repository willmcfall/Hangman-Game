
// Creates variable and establishes an inital value of zero for wins
// Creates variable and establishes an inital value of zero for losses
// Creates variable and establishes an inital value of ten for number of guesses
// Creates variable and establishes an inital value of ten for number of guesses
// Creates variable that holds the letter guessed by the user
// Creates a variables that will hold the blank spaces for word to be guessed
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;
var numRemaining = 0;
var guessLetter = "";
var blankSpaces = "";
var actualWord = "";
var actualWordLower = "";
var actualWordLowerSplit = "";


// Creates an array that holds all words that could be potentially used
// Creates randomized word that holds the current word to be guessed
var potentialWord = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango Cluster Princess","Abradolf Lincler","Adjudicator Rick","Agency Director","Alan Rails","Albert Einstein","Alexander","Alien Googah","Alien Morty","Alien Rick","Amish Cyborg",
"Annie","Antenna Morty","Antenna Rick","Ants in my Eyes Johnson", "Mr Poopy Butthole"];
var actualWord = potentialWord[Math.floor(Math.random() * potentialWord.length)];
var actualWordLower = actualWord.toLowerCase();
var actualWordLowerSplit = actualWordLower.split("");

console.log(actualWord)
console.log(actualWordLower)
console.log(actualWordLowerSplit)

// Step 1. Awaits for user to click button then runds a function called myFunction
// Step 2. Console logs the actual word that was randomly selected to ensure that blank spaces are accurately generated
// Step 3. Runs For loop that assigns a value of " _ " if there is a letter and a value of " - " if there is a space or slash
// Step 4. 

function initiationFunction(){



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












