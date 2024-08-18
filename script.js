// Function to let the computer make a choice between rock, paper, or scissors

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

// Function to let user pick rock, paper, or scissors

function getHumanChoice() {
  // Prompt the user to enter a choice and convert it to lowercase if needed, also assign it to const humanChoice
  const humanChoice = prompt(
    "Please choose rock, paper, or scissors."
  ).toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    // If the user enters an invalid choice, alert them and call the function again
    alert(
      humanChoice +
        " is not a valid choice. Please choose rock, paper, or scissors."
    );
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
