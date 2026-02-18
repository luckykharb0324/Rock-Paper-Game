const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("resultText");
const info = document.getElementById("detailsText");

const playerScoreBox = document.getElementById("playerScore");
const computerScoreBox = document.getElementById("computerScore");
const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

const moves = ["rock", "paper", "scissors"];

// random move for computer
function computerMove() {
  return moves[Math.floor(Math.random() * moves.length)];
}

// decide winner
function checkWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    const computerChoice = computerMove();

    const winner = checkWinner(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore++;
      result.innerText = "You won";
    } else if (winner === "computer") {
      computerScore++;
      result.innerText = "You lost";
    } else {
      result.innerText = "Draw";
    }

    info.innerText =
      "You: " + playerChoice + " | Computer: " + computerChoice;

    playerScoreBox.innerText = playerScore;
    computerScoreBox.innerText = computerScore;
  });
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreBox.innerText = 0;
  computerScoreBox.innerText = 0;
  result.innerText = "Make your move";
  info.innerText = "";
});
