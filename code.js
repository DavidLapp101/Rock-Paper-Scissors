var playerScore = 0;
var aiScore = 0;
var tieScore = 0;
var playerOption = "";
var aiOption = "";
 
var playerSide = $(".player-choice .icon");
var aiSide = $(".ai-choice .icon");

function chooseHand(choice) {
    if(choice == 'rock') {
        playerSide.html(`<img src="images/${choice}.png" alt="">`);
    }
    else if(choice == 'paper') {
        playerSide.html(`<img src="images/${choice}.png" alt="">`);
    }
    else {
        playerSide.html(`<img src="images/${choice}.png" alt="">`);
    }

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

    cleanUp();
}

function cleanUp() {
    if(playerOption == aiOption) {
        tieScore++;
        $(".tie-score").html(tieScore);
        alert("It's a tie!");
    }
    else if((playerOption == 'rock' && aiOption == 'scissors') ||
    (playerOption == 'paper' && aiOption == 'rock') ||
    (playerOption == 'scissors' && aiOption == 'paper')) {
        playerScore++;
        $(".player-score").html(playerScore);
        alert("You Win!");
    }
    else {
        aiScore++;
        $(".ai-score").html(aiScore);
        alert("You Lose!");
    }
}