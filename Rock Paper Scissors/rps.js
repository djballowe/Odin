function computerPlay() {
    let choice = ['paper', 'rock', 'scissors'];
    let ans = Math.floor(Math.random()*choice.length);
    let value = choice[ans];
    return value;
}

function playRound(human, cpu) {
    
    if (cpu === 'paper' && human === 'scissors') {
            return 'You Win! Scissors beats paper';
    }
    if (cpu === 'rock' && human === 'scissors') {
            return 'You Lose! Rock beats scissors';
    }
    if (cpu === 'scissors' && human === 'scissors') {
            return 'TIE';
    }
    if (cpu === 'paper' && human === 'rock') {
            return 'You Lose! Paper beats rock';
    }
    if (cpu === 'rock' && human === 'rock') {
            return 'TIE';
    }
    if (cpu === 'scissors' && human === 'rock') {
            return 'You Win! Rock beats scissors';
    } 
    if (cpu === 'paper' && human === 'paper') {
            return 'TIE';
    }  
    if (cpu === 'rock' && human === 'paper') {
            return 'You Win! Paper beats rock';
    }
    if (cpu === 'scissors' && human === 'paper') {
            return 'You Lose! Scissors beats paper';
    }
}

/*function userPrompt() {
        let userChoice = prompt('Enter your choice');
        if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
                return userChoice;
        } else {
                return 'invalid selection';
        }
}
*/
function game(human, cpu) {
    let roundNumber = 0;
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 4; i++) {
                game();
                computerPlay();
                console.log(playRound(pSelection, cSelection));
                console.log(`Human Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                console.log(`Round: ${roundNumber}`);    
        } 
        
    
        if (cpu === 'paper' && human === 'rock') {
            humanScore++;
            Round++;
        }
        if (cpu === 'scissors' && human === 'rock') {
            computerScore++;
            roundNumber++;
        }
        if (cpu === 'rock' && human === 'paper') {
            humanScore++;
            roundNumber++;
        }
        if (cpu === 'scissors' && human === 'paper') {
            computerScore++;
            roundNumber++;
        }
        if (cpu === 'paper' && human === 'scissors') {
                humanScore++;
                roundNumber++;
        }
        if (cpu === 'rock' && human === 'scissors') {
                computerScore++;
                roundNumber++;
        }
            
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Round: ${roundNumber}`);
}


const pSelection = 'scissors';
const cSelection = computerPlay();

//playRound(pSelection, cSelection);
game();