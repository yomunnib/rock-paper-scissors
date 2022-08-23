let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}  

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection)
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection);
  } else if (playerSelection === computerSelection) {
      return("draw. " +playerSelection + " draws against " +computerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
  } else {
      return("user input error");
  }
}


function rock() {
  let computerSelection = getComputerChoice();
  let playerSelection = "rock";
  console.log("final score is " +playerWin + "-" +computerWin);
  document.querySelector("#status").textContent = (playRound(playerSelection, computerSelection));
}

function paper() {
  let computerSelection = getComputerChoice();
  let playerSelection = "paper";
  console.log(playRound(playerSelection, computerSelection));
  console.log("final score is " +playerWin + "-" +computerWin);
}

function scissors() {
  let computerSelection = getComputerChoice();
  let playerSelection = "scissors";
  console.log(playRound(playerSelection, computerSelection));
  console.log("final score is " +playerWin + "-" +computerWin);
}


// function resetGame() {
//   guessCount = 1;

//   const resetParas = document.querySelectorAll(".resultParas p");
//   for (const resetPara of resetParas) {
//     resetPara.textContent = "";
//   }
//   resetButton.parentNode.removeChild(resetButton);

//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();

//   lastResult.style.backgroundColor = "white";

//   randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNumber);
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let computerSelection = getComputerChoice();
//     let playerSelection = getPlayerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// game();