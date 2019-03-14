// Creates a global variable (NumWins) which holds the number of times the user has won and establishes an inital value of zero
var numWins = 0;
console.log(numWins);

// Creates a global variable (NumLosses) which holds the number of times the user has lost and establishes an inital value of zero
var numLosses = 0;
console.log(numLosses);



// Initiataes a function upon clicking of the start button
function initiationFunction() {

  // Creates a global variable (continueCycle) which holds a boolean variable that allows for reseting of the game
  var continueCycle = true;
  console.log(continueCycle);

  // Asks the user to select a letter from A - Z
  alert("Please select a letter from a - z!")

  startCycle();

  // Initiataes a function that runs until the continueCycle takes a value of false when the user wins or loses
  function startCycle() {
    if (continueCycle == true) {

      // Creates an event dependent number variable (NumRight) which holds the number of times the user has guessed right and establishes an inital value of zero
      var numRight = 0;
      console.log(numRight);

      // Creates an event dependent number variable (NumWrong) which holds the number of times the user has guessed wrong and establishes an inital value of zero
      var numWrong = 0;
      console.log(numWrong);

      // Creates an event dependent string variable (guessLetter) which holds the letter guessed by the user and establishes an inital value of N/A
      var guessLetter = "";
      console.log(guessLetter);

      // Creates an event dependent string variable (guessLetterLower) which holds a lower case version of the letter guessed by the user and establishes an inital value of N/A
      var guessLetterLower = "";
      console.log(guessLetterLower);

      // Creates an event dependent array (guessLetterArray) which allows for iteration across the actualWordLowerSplit
      var guessLetterArray = [""];
      console.log(guessLetterArray);

      // Creates an event dependent array (potentialWord) which holds guessed all the potential words to be randomly selected as a word to be guessed
      var potentialWord = [""];
      console.log(potentialWord);

      // Creates an event dependent string variable (actualWord) which holds the word to be guessed by the user and establishes an inital value of N/A
      var actualWord = "";
      console.log(actualWord);

      // Creates an event dependent string variable (actualWordLower) which holds the lowercase word to be guessed by the user and establishes an inital value of N/A
      var actualWordLower = "";
      console.log(actualWordLower);

      // Creates an event dependent array (actualWordLowerSplit) which holds all the lowercase letters for the word to be guessed by the user
      var actualWordLowerSplit = [""];
      console.log(actualWordLowerSplit);

      // Creates a event dependent array (blankSpaces) which holds an array of blank spaces equivalent of the word to be guessed and establishes an array with inital values of N/A
      var blankSpaces = [""];
      console.log(blankSpaces);

      // Creates event dependent variable (placeHolder) which allows for calculation of number of right responses and number of wrong responses
      var placeHolder = 0;
      console.log(placeHolder);

      // Creates an array called actualWordLowerSplit which includes a randomly generated word, moved to lowercase, and then split by characters
      potentialWord = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Abadango Cluster Princess", "Abradolf Lincler", "Adjudicator Rick", "Agency Director", "Alan Rails", "Albert Einstein", "Alexander", "Alien Googah", "Alien Morty", "Alien Rick", "Amish Cyborg",
        "Annie", "Antenna Morty", "Antenna Rick", "Ants in my Eyes Johnson", "Mr Poopy Butthole"];
      actualWord = potentialWord[Math.floor(Math.random() * potentialWord.length)];
      actualWordLower = actualWord.toLowerCase();
      actualWordLowerSplit = actualWordLower.split("");
      console.log(actualWord);
      console.log(actualWordLower);
      console.log(actualWordLowerSplit);

      // Creates an array called blankSpaces which creates _ for all characters in the array actualWordLowerSplit
      for (i = 0; i < actualWordLowerSplit.length; i++) {
        if (actualWordLowerSplit[i] == " ") {
          blankSpaces[i] = " - ";
        }
        else {
          blankSpaces[i] = " _ ";
        };
      };

      console.log(blankSpaces)

      // Prints the blankspaces, wins, and loses to the display
      document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces;
      document.getElementById("wins").innerHTML = "Number of Wins: " + numWins;
      document.getElementById("loses").innerHTML = "Number of Losses: " + numLosses;


      // Waits for key stroke from the user and and initiates a function that greates a lowercase version of the letter selected and converts to array 
      document.onkeyup = function (event) {
        var guessLetter = event.key;
        var guessLetterLower = guessLetter.toLowerCase();
        guessLetterArray.push(guessLetterLower);
        console.log(guessLetter);
        console.log(guessLetterLower);
        console.log(guessLetterArray);

        // Checks if guessed letter matches any in the array to be guessed and replaces with the correct letter
        for (var i = 0; i < actualWordLowerSplit.length; i++) {
          if (actualWordLowerSplit[i] === guessLetterLower) {
            blankSpaces[i] = " " + guessLetterLower + " ";
            document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces.join(" , ");
          }
          else {
            placeHolder++;
          }
        };

        console.log(placeHolder);


        // Checks whether any the guessed letter matches any letters from the word to be guessed and adds to numWrong if wrong and numRight if correct
        if (placeHolder == actualWordLowerSplit.length) {
          numWrong++;
          placeHolder = 0;
        }
        else {
          numRight++;
          placeHolder = 0;
        };

        console.log(placeHolder);
        console.log(numWrong);
        console.log(numRight);

        var counter = 0;
        for (i = 0; i < blankSpaces.length; i++) {
          if(blankSpaces[i] == " _ "){
            counter++;
          };
        };


        // If numWrong == 10 then the game is over and it restarts
        if (numWrong == 10) {
          numLosses++;
          document.getElementById("loses").innerHTML = "Number of Losses: " + numLosses;
          blankSpace = [""]
          numWrong = 0;
          numRight = 0;
          guessLetterArray = [""];
          alert("You Lost! Please click start to play again!");
          continueCycle = false;
        }

      else if (counter == 0){
          numWins++;
          document.getElementById("wins").innerHTML = "Number of Wins: " + numWins;
          blankSpace = [""]
          numWrong = 0;
          numRight = 0;
          guessLetterArray = [""];
          continueCycle = false;
          alert("You Won! Please click start to play again!");
        };
        document.getElementById("currentword").innerHTML = "Current Word: " + blankSpaces.join(" , ");
        document.getElementById("guesses").innerHTML = "Number of Guesses Wrong: " + numWrong;
        document.getElementById("already").innerHTML = "Letters Already Guessed: " + guessLetterArray.join(" , ");

      };

    };

  };

};











