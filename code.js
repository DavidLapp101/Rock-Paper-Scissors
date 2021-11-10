var playerScore = 0;
var aiScore = 0;
var tieScore = 0;
var playerOption = "";
var aiOption = "";
var winnerMessage = "";
 
var playerSide = $(".player-choice .icon");
var aiSide = $(".comp-choice .icon");

function chooseHand(choice) {
    playerSide.html(`<img src="images/${choice}.png" alt="">`);
    playerOption = choice;
    
    aiChoice();
}

function aiChoice() {
    let random = Math.random() * 3;

    if(random > 2) {
        aiSide.html(`<img src="images/rock.png" alt="">`);
        aiOption = 'rock';
    }
    else if(random > 1) {
        aiSide.html(`<img src="images/paper.png" alt="">`);
        aiOption = 'paper';
    }
    else {
        aiSide.html(`<img src="images/scissors.png" alt="">`);
        aiOption = 'scissors';
    }

    displayWinner();
}

function displayWinner() {
    if(playerOption == aiOption) {
        tieScore++;
        $(".tie-score").html(tieScore);
        winnerMessage = "It's a tie!";
    }
    else if((playerOption == 'rock' && aiOption == 'scissors') ||
    (playerOption == 'paper' && aiOption == 'rock') ||
    (playerOption == 'scissors' && aiOption == 'paper')) {
        playerScore++;
        $(".player-score").html(playerScore);
        winnerMessage = "You Win!";
    }
    else {
        aiScore++;
        $(".ai-score").html(aiScore);
        winnerMessage = "You Lose!";
    }

    $(".winner-message").html(`<p>${winnerMessage}</p>
    <button onclick="cleanUp()">RESET</button>`);
}

function cleanUp() {
    playerSide.empty();
    aiSide.empty();
    $(".winner-message").empty();
}