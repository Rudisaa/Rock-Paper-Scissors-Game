let playerScore = 0;
let computerScore = 0;
let computerOptions = ['rock', 'paper', 'scissors'];
let playerOptions = "";

let game = () => {
    userHand();
}


let buttonClick = () => {
    console.log(computerHand());
    console.log(playerOptions);
}
//user hand
let userHand = () => {
    const userSelection = document.querySelectorAll('#user');
    for(let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener('click', buttonClick);
        playerOptions = userSelection[i].textContent.trim().toLowerCase();
    }
}

//computer hand 
let computerHand = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let compHand = computerOptions[randomNumber];
    return compHand;
}
game();

//comparing both hands

