function computerPlay() {
    let choice = ['paper', 'rock', 'scissors'];
    let ans = Math.floor(Math.random()*choice.length);
    let value = choice[ans];
    return value;
}

function playRound(pSelection, cSelection) {
    if (cSelection === 'paper' && pSelection === 'scissors') {
        return 'You Win! Scissors beats paper';
    }
    if (cSelection === 'rock' && pSelection === 'scissors') {
        return 'You Lose! Rock beats scissors';
    }
    if (cSelection === 'scissors' && pSelection === 'scissors') {
        return 'TIE';
    }
    if (cSelection === 'paper' && pSelection === 'rock') {
        return 'You Lose! Paper beats rock';
    }
    if (cSelection === 'rock' && pSelection === 'rock') {
        return 'TIE';
    }
    if (cSelection === 'scissors' && pSelection === 'rock') {
        return 'You Win! Rock beats scissors';
    } 
    if (cSelection === 'paper' && pSelection === 'paper') {
        return 'TIE';
    }  
    if (cSelection === 'rock' && pSelection === 'paper') {
        return 'You Win! Paper beats rock';
    }
    if (cSelection === 'scissors' && pSelection === 'paper') {
        return 'You Lose! Scissors beats paper';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    
}


const pSelection = 'scissors';
const cSelection = computerPlay();

console.log(playRound(pSelection, cSelection));