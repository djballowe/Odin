     

let tie = 0;
let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const hScore = document.getElementById('humanScore');
const cScore = document.getElementById('computerScore');       
        





function computerPlay() {
        const computerButtons = document.querySelectorAll('.computerButton');
        
        let choice = ['paper', 'rock', 'scissors'];
        let ans = Math.floor(Math.random()*choice.length);
        let cSelection = choice[ans];
        if (cSelection === 'paper') {
                if (document.getElementById('Crock').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Crock').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Cpaper').classList.add('computerButtonOnSelect');
                }
                if (document.getElementById('Cscissors').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Cscissors').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Cpaper').classList.add('computerButtonOnSelect');
                } else {
                        document.getElementById('Cpaper').classList.add('computerButtonOnSelect');
                }
        }
        if (cSelection === 'rock') {
                if (document.getElementById('Cpaper').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Cpaper').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Crock').classList.add('computerButtonOnSelect');
                }
                if (document.getElementById('Cscissors').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Cscissors').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Crock').classList.add('computerButtonOnSelect');
                } else {
                        document.getElementById('Crock').classList.add('computerButtonOnSelect');
                }
        } 
        if (cSelection === 'scissors') {
                if (document.getElementById('Crock').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Crock').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Cscissors').classList.add('computerButtonOnSelect');
                }
                if (document.getElementById('Cpaper').classList.contains('computerButtonOnSelect')) {
                        document.getElementById('Cpaper').classList.toggle('computerButtonOnSelect');
                        document.getElementById('Cscissors').classList.add('computerButtonOnSelect');
                } else {
                        document.getElementById('Cscissors').classList.add('computerButtonOnSelect');
                }
                
        }
        
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
                        status.style.display = 'flex';
                        playAgain.style.display = 'flex';
                }

        } else if (pSelection === cSelection) {
                tie ++;
        
        } else {
                computerScore++;

                if (computerScore === 5) {
                        lose.style.display = 'flex';
                        playAgain.style.display = 'flex';
                        
                }
        }

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



