// DOM variables
const rock = document.querySelector("body > div > div.input-container > div:nth-child(1) > img");
const paper = document.querySelector("body > div > div.input-container > div:nth-child(2) > img");
const scissors = document.querySelector("body > div > div.input-container > div:nth-child(3) > img");
let announcer = document.querySelector("body > div > div.announcer-container > h1");
let roundNumber = document.querySelector("#round");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

// Event listeners
rock.addEventListener("click", function(){
	game("rock");
});

paper.addEventListener("click", function(){
	game("paper");
});

scissors.addEventListener("click", function(){
	game("scissors");
});

//Computer's play
function computerPlay(){
	let moves = ["rock", "paper", "scissors"];
	let computerMoveSelector = Math.floor(Math.random() * 3);
	let computerMove = moves[computerMoveSelector];
	return computerMove;
}

//Checks to see who won
function playRound(playerSelection, computerSelection){
	if (playerSelection === computerSelection) {
		return "draw";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return "you lose";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return "you lose";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return "you lose";
	} else {
		return "you win!";
	}
}

// Game
let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function game(userInput){

	announcer.innerHTML = "You picked " + userInput;

	const computersMove = computerPlay();
	const roundWinner = playRound(userInput, computersMove);

	setTimeout(function() {
		announcer.innerHTML = "Computer picked " + computersMove;
			setTimeout(function() {
			if (roundWinner === "draw") {
				announcer.innerHTML = "Draw...";
				rounds++;
			} else if (roundWinner === "you lose") {
				announcer.innerHTML = "Computer Wins!";
				rounds++;
				computerWins++
			} else {
				announcer.innerHTML = "You Win!";
				rounds++;
				playerWins++;
			}

			roundNumber.innerHTML = rounds;
			playerScore.innerHTML = playerWins;
			computerScore.innerHTML = computerWins;

			setTimeout(function() {
				announcer.innerHTML = "Click One Of The Images Below To Pick Your Move";

				if (rounds === 5) {
					if (playerWins === computerWins) {
						announcer.innerHTML = "Game Over!";
						setTimeout(function() {
							announcer.innerHTML = "Draw...";
							setTimeout(function() {
								resetGame();
							}, 1500);
						}, 1500);
					} else if (playerWins < computerWins) {
						announcer.innerHTML = "Game Over!";
						setTimeout(function() {
							announcer.innerHTML = "Computer Wins!";
							setTimeout(function() {
								resetGame();
							}, 1500);
						}, 1500);
					} else {
						announcer.innerHTML = "Game Over!";
						setTimeout(function() {
							announcer.innerHTML = "Player Wins!";
							setTimeout(function() {
								resetGame();
							}, 1500);
						}, 1500);
					}
				}

			}, 1500);
		}, 1500);
	}, 1500);
}

function resetGame(){
	rounds = 0;
	playerWins = 0;
	computerWins = 0;

	roundNumber.innerHTML = rounds;
	playerScore.innerHTML = playerWins;
	computerScore.innerHTML = computerWins;

	announcer.innerHTML = "Click One Of The Images Below To Pick Your Move";
}