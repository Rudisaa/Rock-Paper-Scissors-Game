//variables - computer score, user score, total round count, user choice, computer choice, random number
let userScore = 0;
let computerScore = 0;
let roundCount = 0;
let computerOptions = ['rock', 'paper', 'scissors'];
const MAX_ROUNDS = 5;

startGame();


//event listener to see what type of hand was clicked
function startGame() {
    document.addEventListener('click', userClick);
}

function stopGame() {
    document.removeEventListener('click', userClick);
}

//function that sets the userChoice based on what button is clicked
function userClick(e) {
    if(e.target.matches('[data-choice]')) {
        compareSelections(e.target.dataset.choice, computer());
        return;
    }

    if(e.target.matches('[data-play-again]')) {
        resestGame();
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

    if(roundCount === MAX_ROUNDS) {
        displayWinner();
        stopGame();
    }
}

let computer = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerOptions[randomNumber];
    return computerChoice;
}
//win function - add one to the user score
function userWin() {
    const userScoreboard = document.querySelector('.user');
    const alert = document.createElement('div');

    userScore++;
    userScoreboard.textContent = userScore;
    alert.textContent = 'You Won!'
    roundCount++
}
//lose function - add one to the computer score

function computerWin() {
    const computerScoreBoard = document.querySelector('.computer');
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    roundCount++;
}

//game function - once 5 rounds have been reached announce the winner
function displayWinner() {
    const alertContainer = document.querySelector('.alert-container');
    const alert = document.createElement('div');
    const playAgainButton = document.querySelector('.play-again');
    alert.classList.add('alert');


    if(userScore > computerScore) {
        alert.textContent = 'You won!';
        alertContainer.prepend(alert);
        playAgainButton.classList.remove('hide');
        
    } else if(userScore < computerScore) {
        alert.textContent = 'The Computer Won!'
        alertContainer.prepend(alert);

    } else {
        alert.textContent = 'It was a tie!'
        alertContainer.prepend(alert);
    }
}

//reset game function 
function resestGame() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    startGame();
}

//style function - adding animations depending on what hand the user and the computer has - even listener - transitionend

