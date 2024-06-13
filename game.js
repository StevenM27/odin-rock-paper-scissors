let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const scores = document.querySelector("#scores");


function updateScores() {
  scores.textContent = "Player: " + humanScore + " ----- Computer: " + computerScore; 
}


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
  results.textContent = "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".";
  humanScore++;
  updateScores();
}


function lose(humanChoice, computerChoice) {
  results.textContent = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".";
  computerScore++;
  updateScores();
}


function playRound(humanChoice) {

  if (humanScore === 5 || computerScore === 5) {
    results.textContent = "Please refresh the page to play again!";
    return;
  }

  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    results.textContent = "Tie! You both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
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

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

updateScores();