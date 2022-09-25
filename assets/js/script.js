window.addEventListener('load', function() {
    let userPlayed;
    let computerPlayed;
    let userWon;
    const computerChoiceDisplay = document.getElementById("comp-choice-display")
    const playerChoiceDisplay = document.getElementById("player-choice-display")
    const resultDisplay = document.getElementById("result-display")
    

    function userPlay(event){
        userPlayed = event.target.getAttribute("data-play");
        console.log(`User played ${userPlayed}`);
        playerChoiceDisplay.innerHTML = userPlayed;
        computerPlay(computerPlay);
        computerChoiceDisplay.innerHTML = computerPlayed;
        console.log(`Computer played ${computerPlayed}`);
        calculateWinner(userPlayed, computerPlayed);
        resultDisplay.innerHTML = userWon;
        console.log(`You ${userWon}`);
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
                userWon = 'You Won!';
                userScore();
            }
            if ((playComputer === 'rock')){
                userWon = 'You Tie!';
            }
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 'You Lost!';
                compScore();
            }
        }
        if (playUser === 'paper'){
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 'You Won!';
                userScore();
            }
            if ((playComputer === 'paper')){
                userWon = 'You Tie!';
            }
            if ((playComputer === 'scissor') || (playComputer === 'lizard')){
                userWon = 'You Lost!';
                compScore();
            }
        }
        if (playUser === 'scissor'){
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 'You Won!';
                userScore();
            }
            if ((playComputer === 'scissor')){
                userWon = 'You Tie!';
            }
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 'You Lost!';
                compScore();
            }
        }
        if (playUser === 'lizard'){
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 'You Won!';
                userScore();
            }
            if ((playComputer === 'lizard')){
                userWon = 'You Tie!';
            }
            if ((playComputer === 'rock') || (playComputer === 'scissor')){
                userWon = 'You Lost!';
                compScore();
            }
        }
        if (playUser === 'spock'){
            if ((playComputer === 'scissor') || (playComputer === 'rock')){
                userWon = 'You Won!';
                userScore();
            }
            if ((playComputer === 'spock')){
                userWon = 'You Tie!';
            }
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 'You Lost!';
                compScore();
            }
        }
    }


    function  userScore() {
        let oldScore = parseInt(document.getElementById('user-score').innerText);
        document.getElementById('user-score').innerText = ++oldScore;
    }

    function compScore() {
        let oldScore = parseInt(document.getElementById('comp-score').innerText);
        document.getElementById('comp-score').innerText = ++oldScore;
    }

    const playButtons = document.getElementsByClassName('choice-button');
    for (let button of playButtons) {
        button.addEventListener('click', userPlay);
    }

    var btn = document.getElementById("rules");
    var modal = document.getElementById("rules-modal");
    var span = document.getElementsByClassName("close-modal")[0];

    btn.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
});