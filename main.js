function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoice() {
  let choice = prompt("Enter Rock, Paper, or Scissors");
  if (
    choice.match(/rock/i) ||
    choice.match(/paper/i) ||
    choice.match(/scissors/i)
  ) {
    return choice.toLowerCase();
  }
}

let playerScore;
let computerScore;

function compareRock(playerSelection) {
  if (playerSelection === "rock") {
    return "It's a tie!";
  } else if (playerSelection === "paper") {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else {
    computerScore += 1;
    return "Your Lose! Rock beats Scissors";
  }
}

function comparePaper(playerSelection) {
  if (playerSelection === "paper") {
    return "It's a tie!";
  } else if (playerSelection === "scissors") {
    playerScore += 1;
    return "You Win!, Scissors beats Paper";
  } else {
    computerScore += 1;
    return "You Lose! Paper beats Rock";
  }
}

function compareScissors(playerSelection) {
  if (playerSelection === "scissors") {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    playerScore += 1;
    return "You Win! Rock beats Scissors";
  } else {
    computerScore += 1;
    return "You Lose! Scissors beats Paper";
  }
}

function playRound(playerSelection, computerSelection) {
  switch (computerSelection) {
    case 1:
      return compareRock(playerSelection);
      break;
    case 2:
      return comparePaper(playerSelection);
      break;
    case 3:
      return compareScissors(playerSelection);
      break;
  }
}

function getWinner(user, computer) {
  if (user === computer) {
    return "After 5 rounds, it's a tie.";
  } else if (user > computer) {
    return "You win after 5 rounds";
  } else {
    return "You lose after 5 rounds";
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  for (i = 1; i <= 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  return getWinner(playerScore, computerScore);
}

console.log(game());
