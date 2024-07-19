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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" & computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore +=1;
    }
    else if (humanChoice === "rock" & computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore +=1;
    }
    else if (humanChoice === "rock" & computerChoice === "rock") {
        console.log("Tie game!")
    }
    else if (humanChoice === "paper" & computerChoice === "paper") {
        console.log("Tie game!")
    }
    else if (humanChoice === "paper" & computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore +=1;
    }
    else if (humanChoice === "paper" & computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore +=1;
    }
    else if (humanChoice === "scissors" & computerChoice === "scissors") {
        console.log("Tie game!")
    };
};



function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score:" + humanScore);
        console.log("Computer score:" + computerScore)
    }
};

playGame();