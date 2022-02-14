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

// Array of questions, organized as objects (for reference)
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answerA: "A. Strings",
        answerB: "B. Booleans",
        answerC: "C. Alerts",
        answerD: "D. Numbers",
        correctAnswer: "C"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        answerA: "A. Quotes",
        answerB: "B. Curly brackets",
        answerC: "C. Parenthesis",
        answerD: "D. Square brackets",
        correctAnswer: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answerA: "A. Numbers and strings",
        answerB: "B. Other arrays",
        answerC: "C. Booleans",
        answerD: "D. All of the above",
        correctAnswer: "D"
    },
    {
        question: "String values must be enclosed within _______ when beingassigned to variables.",
        answerA: "A. Commas",
        answerB: "B. Curly brackets",
        answerC: "C. Quotes",
        answerD: "D. Parenthesis",
        correctAnswer: "C"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "A. JavaScript",
        answerB: "B. Terminal/Bash",
        answerC: "C. console.log()",
        answerD: "D. For loops",
        correctAnswer: "C"
    }
]

// Start the timer
var startGame = function() {
    setInterval(gameTimerUpdate, 1000);
    askQuestions();
}

// Update Timer
var gameTimerUpdate = function() {
    if (gameTimerNum <= 0) {
        clearInterval(startGame);
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

var displayQuestionFive = function() {
    document.querySelector("#question-four").classList.remove("show");
    document.querySelector("#question-four").classList.add("hide");

    document.querySelector("#question-five").classList.remove("hide");
    document.querySelector("#question-five").classList.add("show");

    $(".answer-btn").on("click", function() {
        console.log("end of game");
    });
}

var displayQuestionFour = function() {
    document.querySelector("#question-three").classList.remove("show");
    document.querySelector("#question-three").classList.add("hide");

    document.querySelector("#question-four").classList.remove("hide");
    document.querySelector("#question-four").classList.add("show");

    $(".answer-btn").on("click", displayQuestionFive);
}

var displayQuestionThree = function() {
    document.querySelector("#question-two").classList.remove("show");
    document.querySelector("#question-two").classList.add("hide");

    document.querySelector("#question-three").classList.remove("hide");
    document.querySelector("#question-three").classList.add("show");

    $(".answer-btn").on("click", displayQuestionFour);
}

var displayQuestionTwo = function() {
    document.querySelector("#question-one").classList.remove("show");
    document.querySelector("#question-one").classList.add("hide");

    document.querySelector("#question-two").classList.remove("hide");
    document.querySelector("#question-two").classList.add("show");

    $(".answer-btn").on("click", displayQuestionThree);
}

var displayQuestionOne = function() {
    document.querySelector("#question-one").classList.remove("hide");
    document.querySelector("#question-one").classList.add("show");

    $(".answer-btn").on("click", displayQuestionTwo);
}

startButtonEl.addEventListener("click", startGame);