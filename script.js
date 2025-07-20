
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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    // find result for each round
    function findResult(humanChoice, computerChoice) {

        let resultStatus;
        if (humanScore > computerScore) {
            resultStatus = `You Won! ${humanChoice} beats ${computerChoice}.`;
        } else if (humanScore < computerScore) {
            resultStatus = `You Lose! ${computerChoice} beats ${humanChoice}.`;
        } else {
            resultStatus = `It's a tie! Both, Computer and you chose ${humanChoice}.`;
        }

        return resultStatus;
    }


    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

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
    }


    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        let roundStatus = findResult(humanChoice, computerChoice);
        console.log(roundStatus)
    }
}

playGame();