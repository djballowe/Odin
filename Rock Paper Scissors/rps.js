

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
        const status = document.getElementById('win');
        const lose = document.getElementById('lose'); 
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
        
        let cSelection = computerPlay();
        
        if (pSelection === 'rock' && cSelection === 'scissors' ||
        pSelection === 'scissors' && cSelection === 'paper' ||
        pSelection === 'paper' && cSelection === 'rock') {
                humanScore ++;
        
                if (humanScore === 5) {
                     status.style.display = 'flex';   
                }
        } else {
                computerScore ++;

                if (computerScore === 5) {
                        lose.style.display = 'flex'
                }
        }     

}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
                playRound(button.id);
        });
});





