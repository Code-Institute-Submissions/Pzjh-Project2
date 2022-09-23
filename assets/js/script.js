


function runGame() {
    document.addEventListener('DOMContentLoaded', function() {
    
    }
}

/** Gets the User answer */
function userChoice() {

    Button.addEventListener('click', function() {
     
     }
}

/**Gets the computer asnwer */
function compChoice() {
    

}

/**Calculates the winner of the game */
function calcWinner() {

document.getElementById("rock").textContent = rock;
document.getElementById("paper").textContent = paper;
document.getElementById("scissor").textContent = scissor;
document.getElementById("lizard").textContent = lizard;
document.getElementById("spock").textContent = spock;
       
    console.log()
        if (userChoice === (compChoice)) {
        console.log('Tie!');
    } else if (userChoice === (rock)) {
        if (compChoice === (paper)) {
        console.log('You Lose!');
    } else if (userChoice === (rock)) {
        if (compChoice === (scissor))
        console.log('You Win!');
    } else if (userChoice === (rock)) {
        if (compChoice === (lizard))
        console.log('You Win!');
    } else if (userChoice === (rock)) {
        if (compChoice === (spock))
        console.log('You Lose!');
    }
    } else if (userChoice === (paper)) {
        if (compChoice === (rock)) {
        console.log('You Win!');
    } else if (userChoice === (paper)) {
        if (compChoice === (scissor))
        console.log('You Lose!');
    } else if (userChoice === (paper)) {
        if (compChoice === (lizard))
        console.log('You Lose!');
    } else if (userChoice === (paper)) {
        if (compChoice === (spock))
        console.log('You Win!');
    }
    } else if (userChoice === (scissor)) {
        if (compChoice === (rock)) {
        console.log('You Lose!');
    } else if (userChoice === (scissor)) {
        if (compChoice === (paper))
        console.log('You Win!');
    } else if (userChoice === (scissor)) {
        if (compChoice === (lizard))
        console.log('You Win!');
    } else if (userChoice === (scissor)) {
        if (compChoice === (spock))
        console.log('You Lose!');
    }
    } else if (userChoice === (lizard)) {
        if (compChoice === (rock)) {
        console.log('You Lose!');
    } else if (userChoice === (lizard)) {
        if (compChoice === (paper))
        console.log('You Win!');
    } else if (userChoice === (lizard)) {
        if (compChoice === (scissor))
        console.log('You Lose!');
    } else if (userChoice === (lizard)) {
        if (compChoice === (spock))
        console.log('You Win!');
    }
    } else if (userChoice === (spock)) {
        if (compChoice === (rock)) {
        console.log('You Win!');
    } else if (userChoice === (spock)) {
        if (compChoice === (paper))
        console.log('You Lose!');
    } else if (userChoice === (spock)) {
        if (compChoice === (scissor))
        console.log('You Win!');
    } else if (userChoice === (spock)) {
        if (compChoice === (lizard))
        console.log('You Lose!');
    }
    }
}

/**Shows the winner of the game */
function showResult() {

}

/**Keeps track of how many times in a row the User has won */
function countScore() {

}
