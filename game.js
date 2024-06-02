let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const choiceID = Math.floor(Math.random() * 3);
  let choice;

  switch (choiceID) {
    case 0:
      choice = "rock";
      break;
  
    case 1:
      choice = "paper";
      break;

    case 2:
      choice = "scissors";
      break;

    default:
      choice = "rock";
      break;
  }

  return choice;
}


function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase();
}


function win(humanChoice, computerChoice) {
  console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".");
  humanScore++;
}


function lose(humanChoice, computerChoice) {
  console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
  computerScore++;
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie! You both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    return;
  }
  
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      lose(humanChoice, computerChoice);
    }
    else {
      win(humanChoice, computerChoice);
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      win(humanChoice, computerChoice);
    }
    else {
      lose(humanChoice, computerChoice);
    }
  }
  else {
    if (computerChoice === "rock") {
      lose(humanChoice, computerChoice);
    }
    else {
      win(humanChoice, computerChoice);
    }
  }
}


function declareWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log("You win!");
  }
  else if (computerScore > humanScore) {
    console.log("You lose!");
  }
  else {
    console.log("Draw!");
  }
}


function playGame() {

  let playerSelection;
  let computerSelection;

  for (let i = 0; i < 5; i++) {
    playerSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }

  declareWinner(humanScore, computerScore);

}


playGame();
