let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
 return Math.floor(Math.random() * 10);
}
//Test console.log(generateTarget());

//Compare guesses 
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
let userDifference = Math.abs(targetNumber - userGuess);
let computerDifference = Math.abs(targetNumber - computerGuess);
if (userGuess < 0 || userGuess > 9) {
    alert("Please enter a number between 0 - 9");
  }
return userDifference <= computerDifference;
}
//Test console.log(compareGuesses(3, 8, 2));


const updateScore = winner => {
if (winner === "human") {
  humanScore++;
} else if (winner === "computer") {
  computerScore++;
}
}

const advanceRound = () => 
  currentRoundNumber++;




