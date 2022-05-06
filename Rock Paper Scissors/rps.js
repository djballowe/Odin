

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

document.getElementById('paper').addEventListener('click', function() {
        pSelection = 'paper';
});

document.getElementById('rock').addEventListener('click', function() {
        pSelection = 'rock';
});

document.getElementById('scissors').addEventListener('click', function() {
        pSelection = 'scissors';
});

function game(pSelection, cSelection) {
        let roundNumber = 0;
        let humanScore = 0;
        let computerScore = 0;

        const button = document.querySelectorAll(".humanButton");
        
        function userChoice() {
                if (button.id === 'paper') {
                        console.log('ah shit here we go again');
                }
        }
        
        
        function computerPlay() {
                let choice = ['paper', 'rock', 'scissors'];
                let ans = Math.floor(Math.random()*choice.length);
                let cSelection = choice[ans];
                return cSelection;
        }

        function playRound(pSelection, cSelection) {
                
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
        
}
