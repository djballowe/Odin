
//const btn = document.querySelector('.human');
//btn.onclick = () => game();

let pSelection = userChoice();
let cSelection = computerPlay();


const button = document.getElementById('humanButton');


function userChoice() {
        button.onclick = function () {
                if (button.className === 'paper') {
                        pSelection = 'paper';
                        return pSelection;
                }
        }
}



function computerPlay() {
        let choice = ['paper', 'rock', 'scissors'];
        let ans = Math.floor(Math.random()*choice.length);
        let cSelection = choice[ans];
        return cSelection;
}


function game(pSelection, cSelection) {
        let roundNumber = 0;
        let humanScore = 0;
        let computerScore = 0;

        

                const playRound = (pSelection, cSelection) => {
                
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
                console.log(playRound(pSelection, cSelection));
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                console.log(`Round: ${roundNumber}`);
        
}
