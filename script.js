const scoreBoard = document.querySelector('.score-board')
const choiceDisplay = document.querySelector('.choice-display')
const choiceResult = document.querySelector('.choice-result')

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const restartButton = document.querySelector('#restart-btn')
const winTargetInput = document.querySelector('#win-target')
const options = [rockButton, paperButton, scissorsButton]

let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;
let winningTarget = 5;
let gameWon = false;

const winColor = "#6BCB77";
const loseColor = "#FF6B6B";
const tieColor = "#a682ff"

scoreBoard.textContent = `Your score: ${userScore} | Computer score: ${computerScore}`


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3); // 0 1 2
    return options[randomIndex];
}


function displayChoices(userChoice, computerChoice) {
    choiceDisplay.textContent = `You Chose: ${userChoice.toUpperCase()} | Computer chose: ${computerChoice.toUpperCase()}`
}


function updateScore(userChoice, computerChoice) {

    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore += 1;
        choiceResult.textContent = `You Won! ${userChoice} beats ${computerChoice}.`;
        choiceResult.setAttribute('style', `box-shadow: 0 0 40px ${winColor};`)

    } else if (userChoice === computerChoice) {
        choiceResult.textContent = `It's a tie!`;
        choiceResult.setAttribute('style', `box-shadow: 0 0 40px ${tieColor}`)

    } else {
        computerScore += 1;
        choiceResult.textContent = `You Lose! ${computerChoice} beats ${userChoice}.`;
        choiceResult.setAttribute('style', `box-shadow: 0 0 40px ${loseColor};`)
    }

    scoreBoard.textContent = `Your score: ${userScore} | Computer score: ${computerScore}`
}


function displayWinner() {

    if (userScore === winningTarget) {
        choiceResult.textContent = "You Won The Game!"
        choiceResult.setAttribute('style', `background-color: ${winColor}; color: #102e4a; box-shadow: 0 0 40px ${winColor}`)
        gameWon = true;
        restartButton.setAttribute('style', 'display: block;');

    } else if (computerScore === winningTarget) {
        choiceResult.textContent = "Computer Won The Game!"
        choiceResult.setAttribute('style', `background-color: ${loseColor}; color: #102e4a; box-shadow: 0 0 40px ${loseColor}`)
        gameWon = true;
        restartButton.setAttribute('style', 'display: block;');
    }
}


function playGame(userChoice, computerChoice) {
    displayChoices(userChoice, computerChoice);
    updateScore(userChoice, computerChoice);
    displayWinner(userChoice, computerChoice);
}


options.forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        computerChoice = getComputerChoice();
        winningTarget = parseInt(winTargetInput.value);

        if ((userScore < winningTarget || computerScore < winningTarget) && !gameWon) {
            playGame(userChoice, computerChoice);
        }

    });
});


restartButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userChoice = "";
    computerChoice = "";
    gameWon = false
    winTargetInput.value = 5;
    winningTarget = 5;

    scoreBoard.textContent = `Your score: ${userScore} | Computer score: ${computerScore}`
    choiceResult.textContent = "Well, Nothing Beats Nothing :P"
    choiceDisplay.textContent = `You Chose Nothing yet`
    choiceResult.setAttribute('style', `box-shadow: none;`)
    restartButton.setAttribute('style', 'display: none;')
})