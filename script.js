let playerScore = 0; 
let compScore = 0;
let computerSelection = computerPlay();
const divEle = document.querySelector('.container')
const para = document.createElement('p');
let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');

for (let i = 0; i < 5; i++) {
    if (compScore > playerScore) {
        para.textContent = "You Lose!"
    } else {
        para.textContent = "Congrats, You Win!"
    }
}

rockBtn.addEventListener('click', function() {
        para.textContent = `${playRound('rock', computerPlay())}, 
        Computer Score: ${compScore} 
        Player Score: ${playerScore}`;
        divEle.appendChild(para);
});

paperBtn.addEventListener('click', function() {
    para.textContent = `${playRound('rock', computerPlay())}, 
    Computer Score: ${compScore} 
    Player Score: ${playerScore}`;
    divEle.appendChild(para);
})

scissorsBtn.addEventListener('click', function() {
    para.textContent = `${playRound('rock', computerPlay())}, 
    Computer Score: ${compScore} 
    Player Score: ${playerScore}`;
    divEle.appendChild(para);
})

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

function playRound(playerSelection, computerSelection) {
    while (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            return ("It's a Tie");
        } else if (computerSelection == 'Paper') {
                compScore++;
                console.log("Computer Score: " + compScore);
                return ("Paper beats Rock!");
            } else if (computerSelection == 'Scissors') {
                playerScore++;
                console.log("Player Score:" + playerScore);
                return ("Rock beat Scissors");
            }
    }

    while (playerSelection === 'paper') {
        if (computerSelection == 'Rock') {
            playerScore++;
            console.log("Player Score:" + playerScore);
            return "Paper beats Rock";
        } else if (computerSelection == 'Paper') {
                return "It's a tie";
            } else if (computerSelection == 'Scissors') {
                compScore++;
                console.log("Computer Score: " + compScore);
                return "Scissors beat Paper";
            }
    }

    while (playerSelection === 'scissors') {
        if (computerSelection == 'Rock') {
            compScore++;
            console.log("Computer Score: " + compScore);
            return "Rock beat Scissors";
        } else if (computerSelection == 'Paper') {
                playerScore++;
                console.log("Player Score:" + playerScore);
                return "Scissors beat Paper";
            } else if (computerSelection == 'Scissors') {              
                return "It's a tie";
            }
    }
}