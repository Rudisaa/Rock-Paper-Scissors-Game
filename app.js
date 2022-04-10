let playerWins = 0;
let compWins = 0;


function computerPlay() {
    let object = Math.floor(Math.random() * (4 - 1) + 1);
    if(object == 1) {
        return 'rock';
    } else if(object ==  2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


const playerSelection = 'rock';
function round(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            console.log('Sorry you lose! Paper Beats Rock');
            
        } else if(computerSelection == 'scissors') {
            console.log("You Win! Rock beats Scissors!");
        
        } else {
            console.log("It was a Tie!");
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            console.log("You Win! Paper Beats Rock");
        } else if(computerSelection == 'paper') {
            console.log("It was a tie!");
        } else {
            console.log("You Lose! Scissor beats Paper!");
        }
    } else if(playerSelection == 'scissors') {
        if( computerSelection == 'rock') {
            console.log("You Lose! Rock beats Scissors!");
        } else if(computerSelection == 'paper') {
            console.log("You Win! Scissors Beats Paper!");
        } else {
            console.log("It was a tie!");
        }
    }
}

console.log(round(playerSelection, computerPlay()));