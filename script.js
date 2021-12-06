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

let rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', function() {
    console.log( playRound('rock', computerPlay()) );
})

let paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', function() {
    console.log( playRound('paper', computerPlay()) );
})

let scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', function() {
    console.log( playRound('scissors', computerPlay()) );
})

function playRound(playerSelection, computerSelection) {
    let playerScore = 0; // check scope access fpr these variables
    let compScore = 0;
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