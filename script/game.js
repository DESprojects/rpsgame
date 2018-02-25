var computerSelection;

// Button Selectors //
var rockBtn = document.querySelector('#rock');
var paperBtn = document.querySelector('#paper');
var scissorsBtn = document.querySelector('#scissors');
var playAgain = document.querySelector('#play-again');

// Text Selectors //
var outcome = document.querySelector('#outcome');
var winDisplay = document.querySelector('#win-number');
var lossDisplay = document.querySelector('#loss-number');
var final = document.querySelector('#final');

// Number of wins and losses //
var wins = 0;
var losses = 0;

// Game Status //
var gameOver = false;

// Button listeners //
rockBtn.addEventListener('click', function() {
  playerSelection = 'rock';
  game();
})

paperBtn.addEventListener('click', function() {
  playerSelection = 'paper';
  game();
})

scissorsBtn.addEventListener('click', function() {
  playerSelection = 'scissors';
  game();
})

playAgain.addEventListener('click', function(){
  gameOver = false;
  playAgain.style.display="none";
  final.style.display="none";
  document.querySelector('.choices').style.display = "flex";
  wins = 0;
  losses = 0;
  updateScore();
})

// Main Game Function //
function game() {
  if (!gameOver) {
    computerPlay();
    playRound();
    updateScore();
    checkWin();
  }
}


// Core Logic //
function playRound() {
  if (playerSelection != computerSelection) {
    if (playerSelection == 'rock') {
      switch (computerSelection) {
        case 'paper':
          losses++
          outcome.innerText = 'You lose! Paper beats Rock';
          break;

        case 'scissors':
          wins++
          outcome.innerText = 'You win! Rock beats Scissors';
          break;
      }
    } else if (playerSelection == 'paper') {
      switch (computerSelection) {
        case 'scissors':
          losses++
          outcome.innerText = 'You lose! scissors beats paper';
          break;

        case 'rock':
          wins++
          outcome.innerText = 'You win! paper beats rock';
          break;
      }
    } else if (playerSelection == 'scissors') {
      switch (computerSelection) {
        case 'rock':
          losses++
          outcome.innerText = 'You lose! rock beats scissors';
          break;

        case 'paper':
          wins++
          outcome.innerText = 'You win! scissors beats paper';
          break;
      }
    }
  } else {
    outcome.innerText = `It's a tie!`;
  }
}

// Update Score //
function updateScore() {
  winDisplay.innerText = wins;
  lossDisplay.innerText = losses;
}

// Check win condition //
function checkWin(){
  if (wins == 5 || losses == 5) {
    gameOver = true;
    document.querySelector('.choices').style.display = "none";
    final.style.display="flex";
    playAgain.style.display = "flex";
    if (wins == 5){
      final.innerText ="You win the whole damn thing";
    } else if (losses == 5){
      final.innerText ="Hey, you lost it all."
    }
  }
}

//  Generate Computer's Choice //
function computerPlay() {
  var calc = Math.floor(Math.random() * Math.floor(3));
  switch (calc) {
    case 0:
      computerSelection = 'rock';
      break;

    case 1:
      computerSelection = 'paper';
      break;

    case 2:
      computerSelection = 'scissors';
      break;
  }
}
