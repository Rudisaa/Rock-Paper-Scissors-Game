let playerWins = 0;
let compWins = 0;


function computerPlay() {
    let object = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(object);
    if(object == 1) {
        return 'rock';
    } else if(object ==  2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
const playerSelection = 'rock';
function round(playerSelection, computerSelection) {
    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log("You Lose! Paper beats rock.")
    }

}