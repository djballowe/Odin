     

let tie = 0;
let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const hScore = document.getElementById('humanScore');
const cScore = document.getElementById('computerScore');       
        


function disablePage () {
        
}


function computerPlay() {
        let choice = ['paper', 'rock', 'scissors'];
        let ans = Math.floor(Math.random()*choice.length);
        let cSelection = choice[ans];
        return cSelection;
}


function playRound(pSelection) {
        let cSelection = computerPlay();

        const status = document.getElementById('win');
        const lose = document.getElementById('lose');
        const playAgain = document.getElementById('playAgain'); 
        
        
        if (pSelection === 'rock' && cSelection === 'scissors' ||
        pSelection === 'scissors' && cSelection === 'paper' ||
        pSelection === 'paper' && cSelection === 'rock') {


                humanScore += 1;


                if (humanScore === 5) {
                        disablePage();
                        status.style.display = 'flex';
                        playAgain.style.display = 'flex';
                }

        } else if (pSelection === cSelection) {
                tie ++;
        
        } else {
                computerScore++;

                if (computerScore === 5) {
                        disablePage();
                        lose.style.display = 'flex';
                        playAgain.style.display = 'flex';
                        
                }
        }
        

        console.log(`human score ${humanScore}`);
        console.log(`computer score ${computerScore}`);
        console.log(`player selection ${pSelection}`);
        console.log(`computer selection ${cSelection}`);

        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
                if (humanScore < 5 && computerScore < 5){
                        playRound(button.id);
                }
        });
});



