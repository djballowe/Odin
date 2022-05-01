function computerPlay() {
    let choice = ['paper'];
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

function game(human, cpu) {
    let roundNumber = 0;
    let humanScore = 0;
    let computerScore = 0;
    if (cpu === 'paper' && human === 'rock') {
        humanScore++;
    }
    if (cpu === 'scissors' && human === 'rock') {
        computerScore++;
    }
    if (cpu === 'rock' && human === 'paper') {
        humanScore++;
    }
    if (cpu === 'scissors' && human === 'paper') {
        computerScore++;
    }
    if (cpu === 'paper' && human === 'scissors') {
        humanScore++;
    }
    if (cpu === 'rock' && human === 'scissors') {
        computerScore++;
    }

    console.log(humanScore)

}


const pSelection = 'scissors';
const cSelection = computerPlay();

console.log(playRound(pSelection, cSelection));
console.log(game('scissors', 'paper'));