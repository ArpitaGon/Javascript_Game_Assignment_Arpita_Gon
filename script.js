let choices = ["rock", "paper", "scissors"];
let gameStats = { wins: 0, losses: 0, ties: 0 };
let player = { choice: null };

function playRock() {
  player.choice = "rock";
  playGame();
}

function playPaper() {
  player.choice = "paper";
  playGame();
}

function playScissors() {
  player.choice = "scissors";
  playGame();
}

function playGame() {
  let isAlive = true;
  if (isAlive) {
    let computerChoice = getComputerChoice();
    document.getElementById("computer-choice").innerText =
      "Computer's Choice: " + computerChoice;
    document.getElementById("player-choice").innerText =
      "Your Choice: " + player.choice;
    compareChoices(player.choice, computerChoice);
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameStats.ties++;
    displayMessage("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    gameStats.wins++;
    displayMessage(
      "You win! " + playerChoice + " beats " + computerChoice + "."
    );
  } else {
    gameStats.losses++;
    displayMessage(
      "You lose! " + computerChoice + " beats " + playerChoice + "."
    );
  }
  updateGameStats();
}
function displayMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function updateGameStats() {
  document.getElementById("game-stats").innerText =
    "Wins: " +
    gameStats.wins +
    " | Losses: " +
    gameStats.losses +
    " | Ties: " +
    gameStats.ties;
}

let rocks = document.getElementById("playRocks")
rocks.addEventListener("click", function() {
playRock()
})

let papers = document.getElementById("playPapers")
papers.addEventListener("click", function() {
playPaper()
})

let scissor = document.getElementById("playScissor")
scissor.addEventListener("click", function() {
playScissors()
})