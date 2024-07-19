console.log("Hello World!");

function getComputerChoice() {
    randNumber = Math.random();
    console.log(randNumber);
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

getHumanChoice();

console.log(getComputerChoice());