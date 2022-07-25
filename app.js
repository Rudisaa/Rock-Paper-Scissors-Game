//variables - computer score, user score, total round count, user choice, computer choice, random number
let userScore = 0;
let computerScore = 0;
let roundCount = 0;
let computerOptions = ['rock', 'paper', 'scissors'];
const playAgainButton = document.querySelector('.play-again');
const GAME_WINNER = 5;

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
 }

//function to compare hands using switch statements, when comparing call a lose function or a win function
function compareSelections(user, computer) {
    let comparison = user+computer;
    
    handDisplay(user, computer);
    console.log(comparison);
    switch(comparison) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            userWin();
            roundWinner('Congratulations, you won this round!');
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            console.log('loser');
            computerWin();
            roundWinner('Sorry You Lost, The Computer Won');
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            roundWinner('It was a tie!');
            break;
    }

    if(userScore === GAME_WINNER || computerScore === GAME_WINNER) {
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
    alert.textContent = 'Congratulations, You Won!'
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
        alert.textContent = 'congratulations, You won the game!';
        alertContainer.prepend(alert);
        playAgainButton.classList.remove('hide');
        
    } else if(userScore < computerScore) {
        alert.textContent = 'Sorry you lost, The Computer Won!'
        alertContainer.prepend(alert);
        playAgainButton.classList.remove('hide');

    } else {
        alert.textContent = 'It was a tie!'
        alertContainer.prepend(alert);
        playAgainButton.classList.remove('hide');
    }
}

//reset game function 
function resetGame() {
    window.location.reload();
}

playAgainButton.addEventListener('click', resetGame);

//style function - adding animations depending on what hand the user and the computer has - even listener - transitionend
function handDisplay(user, computer) {
    const userRock = document.querySelector('.user-rock');
    const userPaper = document.querySelector('.user-paper');
    const userScissors = document.querySelector('.user-scissors');

    const computerRock = document.querySelector('.computer-rock');
    const computerPaper = document.querySelector('.computer-paper');
    const computerScissors = document.querySelector('.computer-scissors');
    
    if(user === 'rock') {
        userPaper.classList.add('hide');
        userScissors.classList.add('hide');
        userRock.classList.remove('hide');
    } else if (user === 'paper') {
        userRock.classList.add('hide');
        userScissors.classList.add('hide');
        userPaper.classList.remove('hide');
    } else {
        userPaper.classList.add('hide');
        userRock.classList.add('hide');
        userScissors.classList.remove('hide');
    }

    if(computer === 'rock') {
        computerPaper.classList.add('hide');
        computerScissors.classList.add('hide');
        computerRock.classList.remove('hide');
    } else if (computer === 'paper') {
        computerRock.classList.add('hide');
        computerScissors.classList.add('hide');
        computerPaper.classList.remove('hide');
    } else {
        computerPaper.classList.add('hide');
        computerRock.classList.add('hide');
        computerScissors.classList.remove('hide');
    }
}

//function for round winner 

function roundWinner(message) {
   const roundWinner = document.querySelector('.round-winner');
   roundWinner.textContent = message;  
}