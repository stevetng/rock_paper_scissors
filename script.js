function getComputerChoice() {
    randNumber = Math.random();
    if (randNumber > 0 & randNumber < 0.33) {
        return "rock";
    }
    else if (randNumber >= 0.33 & randNumber < 0.67) {
        return "paper";
    }
    else {
        return "scissors"
    }
};

function getHumanChoice() {
    userInput = prompt("Rock, paper or scissors?").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log(userInput);
        return userInput;
    }
    else {
        userInput = prompt("Invalid input. Please enter rock, paper or scissors.")
    }
};

let humanScore = 0;
let computerScore = 0;

let gameResults = document.querySelector("#gameResults");

function playRound(humanChoice, computerChoice) {
    gameResults.innerHTML = "";
    if (humanChoice === "rock" & computerChoice === "paper") {
        gameResults.appendChild(document.createTextNode("You lose! Paper beats Rock."))
        computerScore +=1;
    }
    else if (humanChoice === "rock" & computerChoice === "scissors") {
        gameResults.appendChild(document.createTextNode("You win! Rock beats Scissors."));
        humanScore +=1;
    }
    else if (humanChoice === "rock" & computerChoice === "rock") {
        gameResults.appendChild(document.createTextNode("Tie game!"));
    }
    else if (humanChoice === "paper" & computerChoice === "paper") {
        gameResults.appendChild(document.createTextNode("Tie game!"));
    }
    else if (humanChoice === "paper" & computerChoice === "rock") {
        gameResults.appendChild(document.createTextNode("You win! Paper beats Rock."));
        humanScore +=1;
    }
    else if (humanChoice === "paper" & computerChoice === "scissors") {
        gameResults.appendChild(document.createTextNode("You lose! Scissors beats Paper."));
        computerScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "paper") {
        gameResults.appendChild(document.createTextNode("You win! Scissors beats Paper."));
        humanScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "rock") {
        gameResults.appendChild(document.createTextNode("You lose! Rock beats Scissors."));
        computerScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "scissors") {
        gameResults.appendChild(document.createTextNode("Tie game!"))
    };
};

let userButtons = document.querySelectorAll("#gameOptions button");

let scoreDisplay = document.querySelector("#displayScore");

userButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent.toLowerCase();
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        scoreDisplay.innerHTML = "Human score: " + humanScore + "\n" + "Computer score: " + computerScore;
        if (humanScore === 5) {
            scoreDisplay.innerHTML += "\n You won!";
        };
        if (computerScore === 5) {
            scoreDisplay.innerHTML += "\n The computer won!";
        };
    });
});


// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log("Human score:" + humanScore);
//         console.log("Computer score:" + computerScore)
//     }
// };

playGame();