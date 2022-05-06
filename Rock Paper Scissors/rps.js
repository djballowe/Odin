

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

let tie = 0;
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
        let cSelection = computerPlay();
<<<<<<< HEAD
=======
        
>>>>>>> d93fdc8 (counter working properly)
        const status = document.getElementById('win');
        const lose = document.getElementById('lose'); 
        
        
        if (pSelection === 'rock' && cSelection === 'scissors' ||
        pSelection === 'scissors' && cSelection === 'paper' ||
        pSelection === 'paper' && cSelection === 'rock') {
<<<<<<< HEAD

                humanScore += 1;


                if (humanScore === 5) {
                        status.style.display = 'flex';
                        
                }
=======
                humanScore += 1;
        
>>>>>>> d93fdc8 (counter working properly)
        } else if (pSelection === cSelection) {
                tie ++;
        
        } else {
                computerScore++;

                if (computerScore === 5) {
                        lose.style.display = 'flex';
                        
                }
        }
        
<<<<<<< HEAD
=======
        if (computerScore === 5) {
                lose.style.display = 'flex';
        }
        if (humanScore === 5) {
                status.style.display = 'flex';
        }
>>>>>>> d93fdc8 (counter working properly)
        console.log(`human score ${humanScore}`);
        console.log(`computer score ${computerScore}`);
        console.log(`player selection ${pSelection}`);
        console.log(`computer selection ${cSelection}`);

        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
                playRound(button.id);
        });
});


const hover = document.getElementsByClassName('humanButton');


/*
function disablePage () {
        buttons.disabled = true;
        hover.classList.add('test');

}

*/


