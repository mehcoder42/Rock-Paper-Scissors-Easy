function computerPlay() {
    let computerMoves = ['rock', 'paper', 'scissors'];
    computerSelection = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    return computerSelection;
}

function playerPlay() {
    while (playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors') {
        playerSelection = window.prompt('Player Score = ' + (playerScore) + '\nComputer Score = ' + (computerScore) + '\nRock, Paper, or Scissors ?');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') { 
            return playerSelection; 
        }
        alert('Only Rock, Paper, or Scissors Allowed !!!')
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log ('You lose! Paper beats Rock');
        return computerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log ('You lose! Rock beats Scissors');
        return computerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log ('You lose! scissors beats paper');
        return computerScore++
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log ('You won! Rock beats scissors');
        return playerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log ('You won! Scissors beats paper');
        return playerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log ('You won! paper beats rock');
        return playerScore++
    } else {
        console.log ('it\'s a tie ! Looks like both of you pick ' + computerSelection + '.');
    }
}

let playerSelection ;
let computerSelection ;
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay(); // getting computer moves
        playerPlay(); // getting player moves
        playRound(playerSelection, computerSelection); // play one round RPS
    }
    if (playerScore > computerScore) {
        console.log ('You Won ! Congratulations');
    } else if (playerScore < computerScore) {
        console.log ('You Lose to a BOT ! Boo Hoo !!!');
    } else {
        console.log ('Seems like both of you have the same thoughts huh ?')
    }
}

game();