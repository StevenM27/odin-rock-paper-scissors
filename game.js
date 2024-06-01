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

const playerChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playerChoice);
console.log(computerChoice);