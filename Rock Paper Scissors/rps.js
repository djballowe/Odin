let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;



function computerPlay() {
    let choice = ['paper', 'rock', 'scissors'];
    let ans = Math.floor(Math.random()*choice.length);
    let value = choice[ans];
    return value;
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
            
        return 'TIE';
    }
    if (cSelection === 'paper' && pSelection === 'rock') {
        roundNumber++;
        computerScore++;    
        return 'You Lose! Paper beats rock';
    }
    if (cSelection === 'rock' && pSelection === 'rock') {
           
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
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Round: ${roundNumber}`);

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
function game() {
let computerChoices = computerPlay();  
        for (let i = 0; i < 4; i++) {
                computerPlay();
        }
        return computerChoices;
        
}


const pSelection = 'scissors';
let cSelection = computerPlay();

console.log(game());
