
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

// console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Whats your choice? [rock, paper, scissors]: ")
    console.log(humanChoice)
}

getHumanChoice()