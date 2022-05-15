let playerScore = 0;
let computerScore = 0;
let computerOptions = ['rock', 'paper', 'scissors'];
let playerOptions = "";

let game = () => {  
    user();
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
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'papersissors':
            console.log('loser');
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('draw');
            break;
    }

}

game();

//comparing both hands

