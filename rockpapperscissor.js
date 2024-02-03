let playerScore = 0
let computerScore = 0
let roundWinner = ''

//randomly gets computer choice//
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

//if selections are invalid returns error message to player//
    if (playerSelection != 'Rock' && playerSelection != 'Scissors' && playerSelection != 'Paper') {
        return 'Error: please select Rock,Paper,or Scissors';
    }
    if (playerSelection == computerSelection) {
        return 'its a tie'     
    }
    //determines if player wins//
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
         ) {
             playerScore++
             roundWinner = 'player'
             return 'you won this round'
         }
         //determines if computer wins//
    if (
            (computerSelection === 'Rock' && playerSelection === 'Scissors') || 
            (computerSelection === 'Paper' && playerSelection === 'Rock') ||
            (computerSelection === 'Scissors' && playerSelection === 'Paper')
             ) {
                 computerScore++
                 roundWinner = 'computer'
                return 'big oof you lost this one'
             }
}
function playGame(){
    let playerSelection = prompt("Pick your Tool (Rock,Paper,Scissors)"); //gets player selection//
    let computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}
    
for (let i = 0; i < 5; i++) {
    playGame();
}

function displayWinner () {
    if (playerScore > computerScore) {
            return 'You are the champion'}
    else if (playerScore<computerScore) {
            return 'better luck in the next game'}
    else if (playerScore == computerScore) {
             return 'how tf you tie in a 5 round game'}
    }
    console.log(displayWinner())

