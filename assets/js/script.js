var startButtonEl = document.getElementById("start-btn");
var gameTimeEl = document.getElementById("game-timer");
var gameTimerNum = 75;
var questionCounter = 1;
var mainSection = document.getElementById("main-section");
var landingScreen = document.getElementById("landing-screen");
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two");
var questionThree = document.querySelector("#question-three");
var questionFour = document.querySelector("#question-four");
var questionFive = document.querySelector("#question-five");

// Start the timer
var startGame = function() {
    setInterval(gameTimerUpdate, 1000);
    askQuestions();
}

// Update Timer
var gameTimerUpdate = function() {
    if (gameTimerNum <= 0) {
        clearInterval(startGame);
        endGame();
    } else {
        gameTimerNum = gameTimerNum - 1;
        gameTimeEl.textContent = "Time: " + gameTimerNum;
    }
}

var askQuestions = function() {
    landingScreen.classList.remove("show");
    landingScreen.classList.add("hide");
    displayQuestionOne();
}

// Question four correct, display question five
var displayQuestionFiveCorrect = function() {
    document.querySelector("#question-four").classList.remove("show");
    document.querySelector("#question-four").classList.add("hide");

    document.querySelector("#question-five").classList.remove("hide");
    document.querySelector("#question-five").classList.add("show");

    alert("Correct!");

    $(".answer-5a").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
    $(".answer-5b").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
    $(".answer-5c").on("click", function() {
        alert("Correct!");
        endGame();
    });
    $(".answer-5d").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
}

// Question four incorrect
var displayQuestionFiveIncorrect = function() {
    gameTimerNum = gameTimerNum - 10;

    document.querySelector("#question-four").classList.remove("show");
    document.querySelector("#question-four").classList.add("hide");

    document.querySelector("#question-five").classList.remove("hide");
    document.querySelector("#question-five").classList.add("show");

    alert("Incorrect!");

    $(".answer-5a").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
    $(".answer-5b").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
    $(".answer-5c").on("click", function() {
        alert("Correct!");
        endGame();
    });
    $(".answer-5d").on("click", function() {
        alert("Incorrect!");
        gameTimerNum = gameTimerNum - 10;
        endGame();
    });
}

// Question three correct, display question four
var displayQuestionFourCorrect = function() {
    document.querySelector("#question-three").classList.remove("show");
    document.querySelector("#question-three").classList.add("hide");

    document.querySelector("#question-four").classList.remove("hide");
    document.querySelector("#question-four").classList.add("show");

    alert("Correct!");

    $(".answer-4a").on("click", displayQuestionFiveIncorrect);
    $(".answer-4b").on("click", displayQuestionFiveIncorrect);
    $(".answer-4c").on("click", displayQuestionFiveCorrect);
    $(".answer-4d").on("click", displayQuestionFiveIncorrect);
}

// Question three incorrect
var displayQuestionFourIncorrect = function() {
    gameTimerNum = gameTimerNum - 10;

    document.querySelector("#question-three").classList.remove("show");
    document.querySelector("#question-three").classList.add("hide");

    document.querySelector("#question-four").classList.remove("hide");
    document.querySelector("#question-four").classList.add("show");

    alert("Incorrect!");

    $(".answer-4a").on("click", displayQuestionFiveIncorrect);
    $(".answer-4b").on("click", displayQuestionFiveIncorrect);
    $(".answer-4c").on("click", displayQuestionFiveCorrect);
    $(".answer-4d").on("click", displayQuestionFiveIncorrect);
}

// Question two correct, display question three
var displayQuestionThreeCorrect = function() {
    document.querySelector("#question-two").classList.remove("show");
    document.querySelector("#question-two").classList.add("hide");

    document.querySelector("#question-three").classList.remove("hide");
    document.querySelector("#question-three").classList.add("show");

    alert("Correct!");

    $(".answer-3a").on("click", displayQuestionFourIncorrect);
    $(".answer-3b").on("click", displayQuestionFourIncorrect);
    $(".answer-3c").on("click", displayQuestionFourIncorrect);
    $(".answer-3d").on("click", displayQuestionFourCorrect);
}

// Question two incorrect
var displayQuestionThreeIncorrect = function() {
    gameTimerNum = gameTimerNum - 10;

    document.querySelector("#question-two").classList.remove("show");
    document.querySelector("#question-two").classList.add("hide");

    document.querySelector("#question-three").classList.remove("hide");
    document.querySelector("#question-three").classList.add("show");

    alert("Incorrect!");

    $(".answer-3a").on("click", displayQuestionFourIncorrect);
    $(".answer-3b").on("click", displayQuestionFourIncorrect);
    $(".answer-3c").on("click", displayQuestionFourIncorrect);
    $(".answer-3d").on("click", displayQuestionFourCorrect);
}

// Question One Correct, display question two
var displayQuestionTwoCorrect = function() {
    document.querySelector("#question-one").classList.remove("show");
    document.querySelector("#question-one").classList.add("hide");

    document.querySelector("#question-two").classList.remove("hide");
    document.querySelector("#question-two").classList.add("show");

    alert("Correct!");

    $(".answer-2a").on("click", displayQuestionThreeIncorrect);
    $(".answer-2b").on("click", displayQuestionThreeIncorrect);
    $(".answer-2c").on("click", displayQuestionThreeCorrect);
    $(".answer-2d").on("click", displayQuestionThreeIncorrect);
}

// Question One Incorrect
var displayQuestionTwoIncorrect = function() {
    gameTimerNum = gameTimerNum - 10;

    document.querySelector("#question-one").classList.remove("show");
    document.querySelector("#question-one").classList.add("hide");

    document.querySelector("#question-two").classList.remove("hide");
    document.querySelector("#question-two").classList.add("show");

    alert("Incorrect!");

    $(".answer-2a").on("click", displayQuestionThreeIncorrect);
    $(".answer-2b").on("click", displayQuestionThreeIncorrect);
    $(".answer-2c").on("click", displayQuestionThreeCorrect);
    $(".answer-2d").on("click", displayQuestionThreeIncorrect);
}

// Display question one
var displayQuestionOne = function() {
    document.querySelector("#question-one").classList.remove("hide");
    document.querySelector("#question-one").classList.add("show");

    $(".answer-1a").on("click", displayQuestionTwoIncorrect);
    $(".answer-1b").on("click", displayQuestionTwoIncorrect);
    $(".answer-1c").on("click", displayQuestionTwoCorrect);
    $(".answer-1d").on("click", displayQuestionTwoIncorrect);
}

// Set endgame state
var endGame = function() {
    document.querySelector("#question-five").classList.remove("show");
    document.querySelector("#question-five").classList.add("hide");

    document.querySelector("#end-game").classList.remove("hide");
    document.querySelector("#end-game").classList.add("show");

    playerScore = gameTimerNum;

    $("#display-score").text("You earned a score of " + playerScore + ".");

    gameTimerNum = 0;

    $(".submit-btn").on("click", function() {
        // save high scores
        var initials = $(".initials-form").val();

        localStorage.setItem("playerName", initials);
        localStorage.setItem("playerScore", playerScore);

        console.log(localStorage.getItem("playerName"));
        console.log(localStorage.getItem("playerScore"));
    });
}

startButtonEl.addEventListener("click", startGame);