function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}

function getComputerChoice() {
  let randomChoice = getRandomNumber(3);
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let input = prompt("Choose a move. rock/paper/scissors");
  while (!input) {
    input = getHumanChoice();
  }
  if (
    input.toLowerCase() === "rock" ||
    input.toLowerCase() === "paper" ||
    input.toLowerCase() === "scissors"
  ) {
    return input.toLowerCase();
  }
  return false;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("tie");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("Player wins");
      humanScore += 1;
    } else {
      console.log("Computer wins");
      computerScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Player wins");
      humanScore += 1;
    } else {
      console.log("Computer wins");
      computerScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("Player wins");
      humanScore += 1;
    } else {
      console.log("Computer wins");
      computerScore += 1;
    }
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log("Computer choice: " + computerSelection);
    console.log("Human choice: " + humanSelection);
    playRound(humanSelection, computerSelection);
    console.log("Current score:");
    console.log("Computer: " + computerScore);
    console.log("Human:" + humanScore);
  }
}

function decideWinner() {
  if (humanScore >= 5) {
    console.log("Human wins");
  } else {
    console.log("Computer wins");
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();
decideWinner();
