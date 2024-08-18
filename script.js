document.addEventListener("DOMContentLoaded", (event) => {
  // Track score of game
  let humanScore = 0;
  let computerScore = 0;

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

  // Function to write logic to play first round out of 5 and logging that this is Round 1 before anything
  console.log("Round 1:");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie! Both chose " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
  }

  // Function to log the score after each round
  function displayScore() {
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  // Function to determine the winner of the game
  function displayFinalWinner() {
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }

  // Write logic to play 4 extra rounds
  function playGame() {
    // loop 4 times to play 4 extra rounds, first round was already played
    for (let i = 1; i < 5; i++) {
      // Log the current round number
      console.log("Round " + (i + 1) + ":");
      // get new choices every round
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      // log computer's choice for debugging
      console.log("Computer chooses: " + computerSelection);
      // play round with new choices
      playRound(humanSelection, computerSelection);
      // display score after each round
      displayScore();
    }
    // After all rounds are played, display the final winner by calling the displayFinalWinner function
    displayFinalWinner();
  }

  // Call the playGame function to play the game
  playGame();
});
