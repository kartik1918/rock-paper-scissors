function computerPlay() {
    let randomNumber = Math.floor( (Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let computerSelection = computerPlay();

let playerSelection = 'rock';

// let playerSelection = prompt('Enter your Choice: Rock, Paper, Scissors');

// let playerSelection = str;

// if (playerSelection === '' || playerSelection != str) {
//     alert("Please enter a valid input");
// }

// alert('Check Console');

// playerSelection = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
    while (playerSelection == 'rock') {
        if (computerSelection == 'Rock') return "It's a Tie";
            else if (computerSelection == 'Paper') return "You Lose!, Paper beats Rock!";
            else if (computerSelection == 'Scissors') return "You Win!, Rock beat Scissors";
    }

    while (playerSelection === 'paper') {
        if (computerSelection == 'Rock') return "You Win!, Paper beats Rock";
            else if (computerSelection == 'Paper') return "It's a tie";
            else if (computerSelection == 'Scissors') return "You Lose!, Scissors beat Paper";
    }

    while (playerSelection === 'scissors') {
        if (computerSelection == 'Rock') return "You Lose!, Rock beat Scissors";
            else if (computerSelection == 'Paper') return "You Win!, Scissors beat Paper";
            else if (computerSelection == 'Scissors') return "It's a tie";
    }
}