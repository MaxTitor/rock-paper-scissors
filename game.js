function computerPlay(){
	let moves = ["rock", "paper", "scissors"];
	let computerMoveSelector = Math.floor(Math.random() * 3);
	let computerMove = moves[computerMoveSelector];
	return computerMove;
}


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

function game(){
	let playerWins = 0;
	let computerWins = 0;

	for (let i = 0; i < 5; i++) {
		let computerInput = computerPlay();
		let playerInput = prompt("Enter your move");
		let round = playRound(playerInput, computerInput);

		if (round === "you lose") {
			alert("You Lose");
			computerWins++;
		} else if (round === "you win!") {
			alert("You Win!")
			playerWins++;
		} else {
			alert("Draw!");
		}
	}

	if (playerWins === computerWins) {
		alert("Draw!");
	} else if (playerWins < computerWins) {
		alert("Computer Wins!");
	} else {
		alert("Player Wins!");
	}
}