window.addEventListener('load', function() {
    let userPlayed = '';
    let computerPlayed = '';
    let userWon = 0; // 0 losses, 1 wins, 2 tie
    
    

    function userPlay(event){
        userPlayed = event.target.getAttribute("data-play");
        console.log(`User played ${userPlayed}`);
        computerPlay(computerPlay)
        console.log(`Computer played ${computerPlayed}`)
        calculateWinner(userPlayed, 'rock');
        console.log(`User won? ${userWon}`);
        
    }

    function computerPlay (){
        const randomChoice = Math.floor(Math.random() * 5);
        
        if (randomChoice === 0) {
            computerPlayed = 'rock'
        }
        if (randomChoice === 1) {
            computerPlayed = 'paper'
        }
        if (randomChoice === 2) {
            computerPlayed = 'scissor'
        }
        if (randomChoice === 3) {
            computerPlayed = 'lizard'
        }
        if (randomChoice === 4) {
            computerPlayed = 'spock'
        }
    }

    function calculateWinner(playUser, playComputer){
        if (playUser === 'rock'){
            if ((playComputer === 'scissor') || (playComputer === 'lizard')){
                userWon = 1;
            }
            if ((playComputer === 'rock')){
                userWon = 2;
            }
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 0;
            }
        }
        if (playUser === 'paper'){
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 1;
            }
            if ((playComputer === 'paper')){
                userWon = 2;
            }
            if ((playComputer === 'scissor') || (playComputer === 'lizard')){
                userWon = 0;
            }
        }
        if (playUser === 'scissor'){
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 1;
            }
            if ((playComputer === 'scissor')){
                userWon = 2;
            }
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 0;
            }
        }
        if (playUser === 'lizard'){
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 1;
            }
            if ((playComputer === 'lizard')){
                userWon = 2;
            }
            if ((playComputer === 'rock') || (playComputer === 'scissor')){
                userWon = 0;
            }
        }
        if (playUser === 'spock'){
            if ((playComputer === 'scissor') || (playComputer === 'rock')){
                userWon = 1;
            }
            if ((playComputer === 'spock')){
                userWon = 2;
            }
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 0;
            }
        }
    }

    const playButtons = document.getElementsByClassName('choice-button');
    for (let button of playButtons) {
        button.addEventListener('click', userPlay);
    }
});