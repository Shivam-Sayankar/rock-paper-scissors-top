
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // const options = ["rock", "paper", "scissors"]
    // const randomIndex = Math.floor(Math.random() * 3); // 0 1 2
    // return options[randomIndex];

    let computerChoice;
    const randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        computerChoice = "rock";
    } else if (randomChoice === 1) {
        computerChoice = "paper";
    } else { // if randomChoice === 2
        computerChoice = "scissors";
    }

    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt("Whats your choice? [rock, paper, scissors]: ")
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    // rock paper scissors

    // rock vs scissors
    // rock vs paper
    // scissors vs paper

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log("You and the Computer chose the same thing!")
    } else {
        computerScore += 1;
    }


    if (humanScore > computerScore) {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanScore < computerScore) {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log(`It's a tie! Both, Computer and you chose ${humanChoice}.`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);