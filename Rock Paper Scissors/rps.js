

 /* function userChoice() {
        const paper = document.getElementById("paper");
        const rock = document.getElementById("rock");
        const scissors = document.getElementById("scissors");
        paper.stopPropagation;

        if (paper.click == 'humanButton') {
                console.log('paper')
        } 
        if (rock.className == 'humanButton') {
                console.log('rock');
        } 
        if (scissors.className == 'humanButton') {
                console.log('scissors');
        }
       
}
*/      


let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const hScore = document.getElementById('humanScore');
const cScore = document.getElementById('computerScore');       
        
function computerPlay() {
        let choice = ['paper', 'rock', 'scissors'];
        let ans = Math.floor(Math.random()*choice.length);
        let cSelection = choice[ans];
        return cSelection;
}

function playRound(pSelection) {
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
        let cSelection = computerPlay();
        
        if (cSelection === 'paper' && pSelection === 'scissors') {
                roundNumber++;
                humanScore++;    
                return 'You Win! Scissors beats paper';
                                
        }
        if (cSelection === 'rock' && pSelection === 'scissors') {
                roundNumber++;
                computerScore++; 
                return 'You Lose! Rock beats scissors';
        }
        if (cSelection === 'scissors' && pSelection === 'scissors') {
                roundNumber++;
                return 'TIE';
        }
        if (cSelection === 'paper' && pSelection === 'rock') {
                roundNumber++;
                computerScore++;    
                return 'You Lose! Paper beats rock';
        }
        if (cSelection === 'rock' && pSelection === 'rock') {
                roundNumber++;
                return 'TIE';
        }
        if (cSelection === 'scissors' && pSelection === 'rock') {
                roundNumber++;
                humanScore++;    
                return 'You Win! Rock beats scissors';
        } 
        if (cSelection === 'paper' && pSelection === 'paper') {
                return 'TIE';
        }  
        if (cSelection === 'rock' && pSelection === 'paper') {
                roundNumber++;
                humanScore++;    
                return 'You Win! Paper beats rock';
        }
        if (cSelection === 'scissors' && pSelection === 'paper') {
                roundNumber++;
                computerScore++;    
                return 'You Lose! Scissors beats paper';
        }     

}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
                playRound(button.id);
        });
});





