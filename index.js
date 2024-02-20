//logic to play a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection.toLowerCase()) {
    return "tie";
  } else if (
    //logic to determine winner based on player v computer choice
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}
// logic to randomize computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// iterate play round five times
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    //prompt for user input
    const playerSelection = prompt(
      "Enter your choice (Rock, Paper, or Scissors):"
    );
    const computerSelection = getComputerChoice();
    // single round - with winner determination
    const winner = playRound(playerSelection, computerSelection);

    if (winner === "player") {
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (winner === "computer") {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log("It's a tie!");
    }
  }
  // logic to determine overall winner

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
