let playerCount = 0;
let computerCount = 0;

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

	comment1.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}.`;

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

const comment1 = document.querySelector('#comment1');
const comment2 = document.querySelector('#comment2');


const btns = document.querySelectorAll('button');

const modal = document.getElementById('winnerAlert');
const modalContent = document.querySelector('#winner');

// Click anywhere to close modal and reload page
window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	  location.reload();
	}
  }


function getWinner() {
	let round = playRound(playerSelection, computerSelection);
			if (round === 'You win!') {
				playerCount++;
				pScore.textContent = `${playerCount}`;
				if (playerCount === 5) {
					modal.style.display = 'block';
					modalContent.textContent = `You are the winner, ${playerCount} to ${computerCount}!
					Congratulations!`;
					
				}
			}
			else if (round === 'You lose!') {
				computerCount++;
				cScore.textContent = `${computerCount}`;
				if (computerCount === 5) {
					modal.style.display = 'block';
					modalContent.textContent = `You lose, ${playerCount} to ${computerCount}.
					Better luck next time!`;
				}				
			}
			comment2.textContent = `${round}`;
}

btns.forEach((button) => {

	button.addEventListener('click', () => {
		
		computerSelection = computerPlay();
		if (button.id === 'rock') {
			playerSelection = 'rock';
			getWinner();
		}
		else if (button.id === 'paper') {
			playerSelection = 'paper';
			getWinner();
		}
		else if (button.id === 'scissors') {
			playerSelection = 'scissors';
			getWinner();
		}
	})
})






 