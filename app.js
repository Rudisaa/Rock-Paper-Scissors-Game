let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let computerOptions = ['rock', 'paper', 'scissors'];
let playerOptions = "";

let game = () => {  
    
}


let buttonClick = () => {
    compareHand(playerOptions, computer());
}

//user hand
let user = (userHand) => {
   
    const userSelection = document.querySelectorAll('#user');
    for(let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener('click', buttonClick);
        playerOptions = userHand;
        roundCounter++;
    }
}

//computer hand 
let computer = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let hand = computerOptions[randomNumber];
    return hand;
}

//compare hands
let compareHand = (userHand, computerHand) => {
    let compare = userHand+computerHand;

    switch(compare) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log('winner');
            userWin();
            console.log(playerScore)
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'papersissors':
            console.log('loser');
            userLose();
            console.log(computerScore);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('draw');
            break;
    }

}



function userWin() {
    const userScore = document.querySelector('.user-score');
    playerScore++;
    userScore.innerHTML = playerScore;

}

function userLose() {
    const compScore = document.querySelector('.computer-score');
    computerScore++;
    compScore.innerHTML = computerScore;
}

game();

