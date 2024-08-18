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
    // Prompt the user to enter a choice and convert it to lowercase if needed
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

  // Function to handle the round logic
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

  // Function to play the game for 5 rounds
  function playGame() {
    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
      // Log the current round number
      console.log("Round " + i + ":");

      // Get new choices every round
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      // Log computer's choice for debugging
      console.log("Computer chooses: " + computerSelection);

      // Play the round with new choices
      playRound(humanSelection, computerSelection);

      // Display score after each round
      displayScore();
    }

    // After all rounds are played, display the final winner by calling the displayFinalWinner function
    displayFinalWinner();
  }

  // Call the playGame function to start the game
  playGame();
});
