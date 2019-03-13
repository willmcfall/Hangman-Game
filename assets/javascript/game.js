
// Step 1. Awaits for user to click start button then calls a function called myFunction
// Step 2. Creates variables to default initial values
// Step 2. Console logs the actual word that was randomly selected to ensure that blank spaces are accurately generated
// Step 3. Runs For loop that assigns a value of " _ " if there is a letter and a value of " - " if there is a space or slash
// Step 4. 


function initiationFunction(){


// Creates variable and establishes an inital value of zero for wins
// Creates variable and establishes an inital value of zero for losses
// Creates variable and establishes an inital value of ten for number of guesses
// Creates variable and establishes an inital value of null for number of remaining guesses
// Creates variable that holds the letter guessed by the user
// Creates a variables that will hold the blank spaces for word to be guessed
var numWins = 0;
console.log(numWins);

var numLosses = 0;
console.log(numLosses);

var numWrong = 0;
console.log(numWrong);

var numRight = 0;
console.log(numRight);

var guessLetter = "";
console.log(guessLetter);

var guessLetterLower = "";
console.log(guessLetterLower);

var blankSpaces = [""];
console.log(blankSpaces);

var actualWord = "";
console.log(actualWord);

var actualWordLower = "";
console.log(actualWordLower);

var actualWordLowerSplit = [""];
console.log(actualWordLowerSplit);

var guessLetterArray= [""];
console.log(guessLetterArray);

var placeHolder= 0;


alert("Please select a letter from A - Z")


// Creates an array that holds all words that could be potentially used
// Creates randomized word that holds the current word to be guessed
// Creates lower case version of word to be guessed
// Creates an array of the individual letters in the word to tbe guessed
var potentialWord = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango Cluster Princess","Abradolf Lincler","Adjudicator Rick","Agency Director","Alan Rails","Albert Einstein","Alexander","Alien Googah","Alien Morty","Alien Rick","Amish Cyborg",
"Annie","Antenna Morty","Antenna Rick","Ants in my Eyes Johnson", "Mr Poopy Butthole"];
var actualWord = potentialWord[Math.floor(Math.random() * potentialWord.length)];
var actualWordLower = actualWord.toLowerCase();
var actualWordLowerSplit = actualWordLower.split("");
console.log(actualWord);
console.log(actualWordLower);
console.log(actualWordLowerSplit);
var numRemaining = actualWordLower.length;
console.log(numRemaining);


for (i = 0; i < actualWordLowerSplit.length; i++) {
  if (actualWordLowerSplit[i] == " ") {
    blankSpaces[i] = " - ";
  } else {
    blankSpaces[i] = " _ ";
  }
}

console.log(blankSpaces)
// Prints the blankspaces to the display
document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces;
// Prints the number of wins to the display
document.getElementById("wins").innerHTML = "Number of Wins: " + numWins;
// Prints the number of loses to the display
document.getElementById("loses").innerHTML = "Number of Losses: " + numLosses;


// Waits for key stroke and initiates a function
  document.onkeyup = function(event) {
  var guessLetter = event.key;
  console.log(guessLetter);
  var guessLetterLower = guessLetter.toLowerCase();
  guessLetterArray.push(guessLetterLower)
  console.log(guessLetterLower);

// Checks if matching and replaces the empty spaces in the array blankSpaces
for (var i = 0; i < actualWordLowerSplit.length; i++) {
  if (actualWordLowerSplit[i] === guessLetterLower) {
  blankSpaces[i] = " " + guessLetterLower + " ";
  document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces.join(" , ");
   }
  else{
    placeHolder ++ ;
    console.log(placeHolder);
  }
  }


  if (placeHolder == actualWordLowerSplit.length){
    numWrong ++;
    placeHolder = 0;
  }
    else{
    numRight ++;
    placeHolder = 0;
    }

    console.log(placeHolder);

//If incorrect

  
  document.getElementById("guesses").innerHTML = "Number of Guesses Wrong: " + numWrong;
  document.getElementById("already").innerHTML = "Letters Already Guessed: " + guessLetterArray.join(" , ");
  }

}












