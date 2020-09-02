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
        alert('Only Rock, Paper, or Scissors Allowed !!!');
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats Rock');
        alert('You lose! Paper beats Rock');
        return computerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats Scissors');
        alert('You lose! Rock beats Scissors');
        return computerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! scissors beats paper');
        alert('You lose! scissors beats paper');
        return computerScore++
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You won! Rock beats scissors');
        alert('You won! Rock beats scissors');
        return playerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You won! Scissors beats paper');
        alert('You won! Scissors beats paper');
        return playerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You won! paper beats rock');
        alert('You won! paper beats rock');
        return playerScore++
    } else {
        console.log('it\'s a tie ! Looks like both of you pick ' + computerSelection + '.');
        alert('it\'s a tie ! Looks like both of you pick ' + computerSelection + '.');
    }
}

let playerSelection;
let computerSelection;
let playerScore;
let computerScore;
let x;

function numberOfGames() {

    while (typeof x != 'number') {
        x = prompt('How many rounds to Play ?');
        x = Number(x);
        if (typeof x == 'number') {
            return x;
        }
        alert('Number ONLY !!!');
    }
}


function game() {
    
    
    playerScore = 0;
    computerScore = 0;
    numberOfGames();
    for (let i = 0; i < x; i++) {
        computerPlay();
        playerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert('Winner Winner Chicken Dinner ! Congratulations !');
    } else if (playerScore < computerScore) {
        alert('No Chicken Dinner For You ! Try Harder Next Time !');
    } else {
        alert('No Chicken Dinner For Anyone !!!')
    }
    alert('Type game(); on console to play again !');
    return ('Type game(); on console to play again !');
}

game();