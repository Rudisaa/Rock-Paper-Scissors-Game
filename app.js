
//@param playerWins- counter for amount of times user wins
//@para compWins - counter for amount of times computer wins
let playerWins = 0;
let compWins = 0;

//ComputerPlay - a function that outputs a random number between 1-3 
//if object = 1 return rock
//if object = 2 return paper
//if object = 3 return scissors
function computerPlay() {
    let object = Math.floor(Math.random() * (4 - 1) + 1);
    if(object == 1) {
        return 'rock';
    } else if(object ==  2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}//endc computerPlay




//function playRound - plays one round of the game rock-paper-scissors
//@param playerSelection - the selection the user inputs
//@param computerSelection - the object randomly returned from computerPlay function
function playRound(playerSelection, computerSelection) {
    //if player inputs rock, paper, or, scissors
    //depending on random object from computerSelection(computerPlay), player wins the round or loses the round
    //if player wins add 1 to playerWin counter
    //if player loses add 1 to computerWin counter
    //if tie don't add 1 to any counter
    playerSelection.toLowerCase();
    console.log(playerSelection);
    if(playerSelection === 'rock') {
        if(computerSelection == 'paper') {
            return "Sorry you lose! Paper Beats Rock";
          
        } else if(computerSelection == 'scissors') {
            return "You Win! Rock beats Scissors!";
          
        } else {
            return "It was a Tie!";
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            return "You Win! Paper Beats Rock";
          
        } else if(computerSelection == 'paper') {
            return "It was a tie!";
        } else {
            return "You Lose! Scissor beats Paper!";
          
        }
    } else if(playerSelection == 'scissors') {
        if( computerSelection == 'rock') {
            return "You Lose! Rock beats Scissors!";
    
        } else if(computerSelection == 'paper') {
            return "You Win! Scissors Beats Paper!";
       
        } else {
            return "It was a tie!";
        }
    } else {
        return "Please Enter A Valid Object."
    }

}//end playRound

function


let playerSelection = prompt("Please enter Rock, Paper, or Scissors");
let computerSelection = computerPlay();






