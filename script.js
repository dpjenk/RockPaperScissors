const choice = ["rock", "paper", "scissors"];

function computerSelection() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
    const playerSelection = prompt("Please choose rock, paper, or scissors?").toLowerCase();
    return playerSelection;
  }

  function playRound(playerSelection, computerSelection) {
    //Rock
    if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      return "Loser! Paper beats Rock";
    } else if (playerSelection === computerSelection) {
      tieScore++;
      return "It's a Tie";
    } else
    // Paper
    if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
      tieScore++;
      return "It's a Tie";
    } else
    //Scissors
    if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      return "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
      tieScore++;
      return "It's a Tie";
    } else {
      return "Invalid entry. Please try again.";
    }
  }
  // For single game play only:
  // console.log(playRound(playerSelection(), computerSelection()));

  // For 5 round game that keeps score and reports a final score at the end:
  let playerScore = parseInt(0);
  let computerScore = parseInt(0);
  let tieScore = parseInt(0);

  function game() {
      for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(), computerSelection()));
      }
  
  console.log("Final Player Score: " + playerScore);
  console.log("Final Computer Score: " + computerScore);
  console.log("Final Tie Score: " + tieScore);
    }

  game();





