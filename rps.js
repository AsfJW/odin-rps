let playerCount = 0;
let computerCount = 0;

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
		return 'You lose!'
	}
	else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
		return 'You win!';
	}
	else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ) {
		return 'You win!';
	}
	else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ) {
		return 'You lose!';
	}
	else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock' ) {
		return 'You lose!';
	}
	else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
		return 'You win!';
	}
	else if (playerSelection.toLowerCase() === computerSelection) {return 'It\'s a tie!';}
}


function game() {	
		let playerSelection = prompt('What\'s your choice?');
		const computerSelection = computerPlay();
		console.log('Computer says: ' + computerSelection);
		console.log('You picked: ' + playerSelection);	
		console.log(playRound(playerSelection, computerSelection));
		if (playRound(playerSelection, computerSelection) === 'You win!') {
			playerCount++
		}
		else if (playRound(playerSelection, computerSelection) === 'You lose!') {
			computerCount++
		};
		console.log('Score\n' + 'You: ' + playerCount + ' ' + 'Computer: ' +  computerCount);
}

for (let i = 0; i < 5; i++) {
	game();
	if (i == 4) {
		if (playerCount != computerCount) {
		let winner = playerCount > computerCount ? 'Player' : 'Computer';
		alert('Winner is: ' + winner);
		}
		else alert('It\s a tie!');
	}

}



 