const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const choicesDisplay = document.querySelector("#choices-display");

let playerScore = 0;
let computerScore = 0;

function setScore(playerScore, computerScore) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

setScore(playerScore, computerScore);

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Raper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function compareRock(computerChoice) {
  if (computerChoice === "Paper") {
    computerScore += 1;
  } else if (computerChoice === "Scissors") {
    playerScore += 1;
  }
}

function comparePaper(computerChoice) {
  if (computerChoice === "Rock") {
    playerScore += 1;
  } else if (computerChoice === "Scissors") {
    computerScore += 1;
  }
}

function compareScissors(computerChoice) {
  if (computerChoice === "Rock") {
    computerScore += 1;
  } else if (computerChoice === "Paper") {
    playerScore += 1;
  }
}

function playRound(playerChoice, computerChoice) {
  choicesDisplay.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}`;
  setScore(playerScore, computerScore);
}

rock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  compareRock(computerChoice);
  playRound("Rock", computerChoice);
});

paper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  comparePaper(computerChoice);
  playRound("Paper", computerChoice);
});

scissors.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  compareScissors(computerChoice);
  playRound("Scissors", computerChoice);
});
