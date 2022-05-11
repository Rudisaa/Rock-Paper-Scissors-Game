
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
}//end computerPlay




//function playRound - plays one round of the game rock-paper-scissors
//@param playerSelection - the selection the user inputs
//@param computerSelection - the object randomly returned from computerPlay function
function playRound(playerSelection, computerSelection) {
    //if player inputs rock, paper, or, scissors
    //depending on random object from computerSelection(computerPlay), player wins the round or loses the round
    //if player wins add 1 to playerWin counter
    //if player loses add 1 to computerWin counter
    //if tie don't add 1 to any counter
    console.log('You Choose ' + playerSelection + " and the Computer Selected " + computerSelection);
    if(playerSelection === 'rock') {
        if(computerSelection == 'paper') {
            compWins++;
            return "Sorry you lose! Paper Beats Rock";
        } else if(computerSelection == 'scissors') {
            playerWins++
            return "You Win! Rock beats Scissors!"; 
        } else {
            return "It was a Tie!";
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            playerWins++
            return "You Win! Paper Beats Rock";
        } else if(computerSelection == 'paper') {
            return "It was a tie!";
        } else {
            compWins++;
            return "You Lose! Scissor beats Paper!";
        }
    } else if(playerSelection == 'scissors') {
        if( computerSelection == 'rock') {
            compWins++;
            return "You Lose! Rock beats Scissors!"; 
        } else if(computerSelection == 'paper') {
            playerWins++;
            return "You Win! Scissors Beats Paper!";
        } else {
            return "It was a tie!";
        }
    } else {
        return "Please Enter A Valid Object."
    }

}//end playRound

//function game - loops through playrounds 5 times and prompts user to enter their object of choice 5 times
//displays how many wins the player has and how many wins computer has
//then displays who the winner is based on who has the most amount of wins
function game() {
    //looping through 5 times 
    for(let i =0; i < 5; i++) {
        let userInput = prompt("Please enter Rock, Paper, or Scissors");
        let playerSelection = userInput.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }//end for
    console.log("Your Score is: " + playerWins + " The Computer's Score is: " + compWins);
    if(compWins < playerWins) {
        console.log("YOU WIN!!!")
    } else if (compWins > playerWins) {
        console.log("SORRY YOU LOST! BETTER TRY NEXT TIME.");
    } else {
        console.log("IT WAS A TIE!!");
    }
}//end game

//running the game function
game();


let game = () => {
    
}








