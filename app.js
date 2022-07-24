//variables - computer score, user score, total round count, user choice, computer choice, random number
let userScore = 0;
let computerScore = 0;
let roundCount = 0;
let computerOptions = ['rock', 'paper', 'scissors'];

startGame();


//event listener to see what type of hand was clicked
function startGame() {
    document.addEventListener('click', userClick);
    if 
}

//function that sets the userChoice based on what button is clicked
function userClick(e) {
    if(e.target.matches('[data-userhand]')) {
        compareSelections(e.target.dataset.userhand, computer());
        return;
    }
}

//function to compare hands using switch statements, when comparing call a lose function or a win function
function compareSelections(user, computer) {
 
    let comparison = user+computer;
    console.log(comparison);
    switch(comparison) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissrospaper':
            console.log('you win');
            userWin();
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            console.log('loser');
            computerWin();
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('tie');
            break;
    }
}

let computer = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerOptions[randomNumber];
    return computerChoice;
}
//win function - add one to the user score
function userWin() {
    const userScoreboard = document.querySelector('.user-score');
    userScore++;
    userScoreboard.textContent = userScore;
    roundCount++
}
//lose function - add one to the computer score

function computerWin() {
    const computerScoreBoard = document.querySelector('.computer-score');
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    roundCount++;
}

//game function - once 5 rounds have been reached announce the winner
function displayWinner() {
    
}


//style function - adding animations depending on what hand the user and the computer has - even listener - transitionend

