
//create variables needed (need string of all letters)
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//set variables I need to call later
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var userInput = [];


//set what random letter the computer will grab

var computerRandom = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerRandom)

//I cannot seem figure out what the next correct step is... but I do have a tutor lined up to help me grasp Javascript better...  

if (userInput === computerRandom) {
    userInput.textContent = "wins: " + userInput;
}

    
    















