function getComputerChoice() {
  const choiceID = Math.floor(Math.random() * 3);
  let choice;

  switch (choiceID) {
    case 0:
      choice = "Rock";
      break;
  
    case 1:
      choice = "Paper";
      break;

    case 2:
      choice = "Scissors";
      break;

    default:
      choice = "Rock";
      break;
  }

  return choice;
}

getComputerChoice();