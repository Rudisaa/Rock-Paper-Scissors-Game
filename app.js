const game = () => { 

    let computerOptions = ['rock', 'paper', 'scissors'];


    let randomNumber = Math.floor(Math.random() * 3);
    let computerHand = computerOptions[randomNumber]

    compareHands(userSelection(), computerHand)
    console.log(computerHand)
    console.log(randomNumber);

}

let userSelection = () => {
    // selecting rock, paper, scissors buttons
    const userOption = document.querySelectorAll('#user');
    // loop length of buttons with id of user
    for(let i = 0; i < userOption.length; i++) {
        // when user clicks hand button assign value to handType and return it
        userOption[i].addEventListener('click', function() {
            let handType = this.value;
            console.log(handType);
            return handType;
            
        });
    }
}

function compareHands(userHand, computerHand) {
    // combining userhand and computerhand to compare
    let compare = userHand+computerHand
}


game();




