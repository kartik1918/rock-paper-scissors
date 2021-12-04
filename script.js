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

function game() {
    for (let i = 0; i < 5; i++) {
        let str = prompt('Enter your Choice: Rock, Paper, Scissors');

        let playerSelection = str;
    
        if (playerSelection === '' || playerSelection != str) {
            alert("Please enter a valid input");
        }
    
        playerSelection = playerSelection.toLowerCase();

        playRound(playerSelection, computerPlay());
    }

    if (playerScore > compScore) {
        console.log("You Win the Game");
    } else {
        console.log("You Lose the Game");
    }
}

let playerScore = 0; 
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    while (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            return ("It's a Tie");
        } else if (computerSelection == 'Paper') {
                compScore++;
                console.log("Computer Score: " + compScore);
                return ("You Lose!, Paper beats Rock!");
            } else if (computerSelection == 'Scissors') {
                playerScore++;
                console.log("Player Score:" + playerScore);
                return ("You Win!, Rock beat Scissors");
            }
    }

    while (playerSelection === 'paper') {
        if (computerSelection == 'Rock') {
            playerScore++;
            console.log("Player Score:" + playerScore);
            return "You Win!, Paper beats Rock";
        } else if (computerSelection == 'Paper') {
                return "It's a tie";
            } else if (computerSelection == 'Scissors') {
                compScore++;
                console.log("Computer Score: " + compScore);
                return "You Lose!, Scissors beat Paper";
            }
    }

    while (playerSelection === 'scissors') {
        if (computerSelection == 'Rock') {
            compScore++;
            console.log("Computer Score: " + compScore);
            return "You Lose!, Rock beat Scissors";
        } else if (computerSelection == 'Paper') {
                playerScore++;
                console.log("Player Score:" + playerScore);
                return "You Win!, Scissors beat Paper";
            } else if (computerSelection == 'Scissors') {              
                return "It's a tie";
            }
    }
}