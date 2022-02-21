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

const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');


const btns = document.querySelectorAll('button');

btns.forEach((button) => {
	button.addEventListener('click', () => {
		computerSelection = computerPlay();
		console.log(playerCount);
		if (button.id === 'rock') {
			playerSelection = 'rock';
			let round = playRound(playerSelection, computerSelection);
			if (round === 'You win!') {
				pScore.textContent = `${playerCount++}`;
			}
			else if (round === 'You lose!') {
				cScore.textContent = `${computerCount++}`;
			}
		}
		else if (button.id === 'paper') {
			playerSelection = 'paper';
			let round = playRound(playerSelection, computerSelection);
			if (round === 'You win!') {
				playerCount++;
			}
			else if (round === 'You lose!') {
				computerCount++;
			}
		}
		else if (button.id === 'scissors') {
			playerSelection = 'scissors';
			let round = playRound(playerSelection, computerSelection);
			if (round === 'You win!') {
				playerCount++;
			}
			else if (round === 'You lose!') {
				computerCount++;
			}
		}
	})
})


// function game() {	
// 		let playerSelection = prompt('What\'s your choice?');
// 		const computerSelection = computerPlay();
// 		console.log('Computer says: ' + computerSelection);
// 		console.log('You picked: ' + playerSelection);	
// 		console.log(playRound(playerSelection, computerSelection));
// 		if (playRound(playerSelection, computerSelection) === 'You win!') {
// 			playerCount++
// 		}
// 		else if (playRound(playerSelection, computerSelection) === 'You lose!') {
// 			computerCount++
// 		};
// 		console.log('Score\n' + 'You: ' + playerCount + ' ' + 'Computer: ' +  computerCount);
// }

// for (let i = 0; i < 5; i++) {
// 	game();
// 	if (i == 4) {
// 		if (playerCount != computerCount) {
// 		let winner = playerCount > computerCount ? 'Player' : 'Computer';
// 		alert('Winner is: ' + winner);
// 		}
// 		else alert('It\s a tie!');
// 	}

// }



 