var playerScore = 0;
var aiScore = 0;
var tieScore = 0;
var playerOption = "";
var aiOption = "";
var winnerMessage = "";
 
var playerSide = $(".player-choice .icon");
var aiSide = $(".comp-choice .icon");

function chooseHand(choice) {
    playerSide.html(`<img src="images/${choice}.png" alt="" class="picture">`);
    playerOption = choice;
    
    aiChoice();
}

function aiChoice() {
    let random = Math.random() * 3;

    if(random > 2) {
        aiSide.html(`<img src="images/rock.png" alt="" class="picture">`);
        aiOption = 'rock';
    }
    else if(random > 1) {
        aiSide.html(`<img src="images/paper.png" alt="" class="picture">`);
        aiOption = 'paper';
    }
    else {
        aiSide.html(`<img src="images/scissors.png" alt="" class="picture">`);
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

    $(".winner-message").html(`<p class="win-message">${winnerMessage}</p>
    <button class="reset-btn" onclick="cleanUp()">RESET</button>`);
}

function cleanUp() {
    playerSide.empty();
    aiSide.empty();
    $(".winner-message").empty();
}