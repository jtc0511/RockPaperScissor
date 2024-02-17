const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultsDisplay");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    result = "It's a tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You win" : "You lose";
        break;

      case "paper":
        result = computerChoice === "rock" ? "You win" : "You lose";
        break;

      case "scissors":
        result = computerChoice === "paper" ? "You win" : "You lose";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result){
    case 'You win':
          resultDisplay.classList.add("greenText");
          break;
    case 'You lose':
          resultDisplay.classList.add("redText");
          break;
    }

  updateScores(result); // Update scores after each round

  roundsPlayed++;

  if (roundsPlayed === totalRounds) {
    displayFinalScores(); 
  }
}

function updateScores(result) {
  if (result === "You win") {
    playerScore++;
  } else if (result === "You lose") {
    computerScore++;
  }
}



function displayFinalScores() {
  // Display final scores or game over message

  resultDisplay.textContent = `Final Scores:
    Player: ${playerScore}
    Computer: ${computerScore}`;
 
      }
