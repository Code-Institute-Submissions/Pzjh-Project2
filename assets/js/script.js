window.addEventListener('load', function() {
    let userPlayed;
    let computerPlayed;
    let userWon;
    const computerChoiceDisplay = document.getElementById("comp-choice-display")
    const playerChoiceDisplay = document.getElementById("player-choice-display")
    const resultDisplay = document.getElementById("result-display")
    

    /**
     * Main function of the game which is started when the user
     * clicks on one of the choices
     */

    function userPlay(event){
        userPlayed = event.target.getAttribute("data-play");
        playerChoiceDisplay.innerHTML = userPlayed;
        computerPlay(computerPlay);
        computerChoiceDisplay.innerHTML = computerPlayed;
        calculateWinner(userPlayed, computerPlayed);
        resultDisplay.innerHTML = userWon;
    }

    /**
     * Makes the computer pick between 0 to 4
     * and then tells it what number correlates to
     */
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

    /**
     *  calculates who will win between the user and computers played choices
     */
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


    /**
     * Increases the users score every time the user wins
     */

    function  userScore() {
        let oldScore = parseInt(document.getElementById('user-score').innerText);
        document.getElementById('user-score').innerText = ++oldScore;
    }

    /**
     * Increases the computers score every time the user loses
     */

    function compScore() {
        let oldScore = parseInt(document.getElementById('comp-score').innerText);
        document.getElementById('comp-score').innerText = ++oldScore;
    }


    /**
     * Resets the score when the user press the "Reset Score" button
     */

    const resetscore = document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('user-score').innerHTML = 0;
        document.getElementById('comp-score').innerHTML = 0;
    });

    const playButtons = document.getElementsByClassName('choice-button');
    for (let button of playButtons) {
        button.addEventListener('click', userPlay);
    }
     
    /**
     * modal with a picture of the rules
     * The basic code is from w3schools.com with a few changes.
     */
    var btn = document.getElementById("rules");
    var modal = document.getElementById("rules-modal");
    var span = document.getElementsByClassName("close-modal")[0];

    /**
     * Opens modal
     */

    btn.onclick = function() {
       modal.style.display = "block";
    }

    /**
     * Closes modal
     */

    span.onclick = function() {
       modal.style.display = "none";
    }

    /**
     * Closes modal on user click outside of modal
     */

    window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
     }
    }
});