window.addEventListener('load', function() {
    let userPlayed = '';
    let computerPlayed = '';
    let userWon = 0; // 2 losses, 1 wins, 0 tie
    const computerChoiceDisplay = document.getElementById('comp-choice-display')
    const playerChoiceDisplay = document.getElementById('player-choice-display')
    const resultDisplay = document.getElementById('result-display')
    

    function userPlay(event){
        userPlayed = event.target.getAttribute("data-play");
        console.log(`User played ${userPlayed}`);
        computerPlay(computerPlay);
        console.log(`Computer played ${computerPlayed}`);
        calculateWinner(userPlayed, computerPlayed);
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
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'rock')){
                userWon = 0;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 2;
                resultDisplay.innerText = userWon;
            }
        }
        if (playUser === 'paper'){
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 1;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'paper')){
                userWon = 0;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'scissor') || (playComputer === 'lizard')){
                userWon = 2;
                resultDisplay.innerText = userWon;
            }
        }
        if (playUser === 'scissor'){
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 1;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'scissor')){
                userWon = 0;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'rock') || (playComputer === 'spock')){
                userWon = 2;
                resultDisplay.innerText = userWon;
            }
        }
        if (playUser === 'lizard'){
            if ((playComputer === 'paper') || (playComputer === 'spock')){
                userWon = 1;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'lizard')){
                userWon = 0;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'rock') || (playComputer === 'scissor')){
                userWon = 2;
                resultDisplay.innerText = userWon;
            }
        }
        if (playUser === 'spock'){
            if ((playComputer === 'scissor') || (playComputer === 'rock')){
                userWon = 1;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'spock')){
                userWon = 0;
                resultDisplay.innerText = userWon;
            }
            if ((playComputer === 'paper') || (playComputer === 'lizard')){
                userWon = 2;
                resultDisplay.innerText = userWon;
            }
        }
    }

    function  userScore() {
       let previousScore = parseint(document.getElementById('user-score').innerText);
       document.getElementById('user-score').innerText = ++previousScore;
    }

    function compScore() {
       let previousScore = parseint(document.getElementById('comp-score').innerText);
       document.getElementById('comp-score').innerText = ++previousScore;
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