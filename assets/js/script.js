var startButtonEl = document.getElementById("start-btn");
var gameTimeEl = document.getElementById("game-timer");
var gameTimerNum = 75;
var questionCounter = 0;
var mainSection = document.getElementById("main-section");
var landingScreen = document.getElementById("landing-screen");
var questionAnswerA = document.getElementById("answer-a");

// Array of questions, organized as objects
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answerA: "A. Strings",
        answerB: "B. Booleans",
        answerC: "C. Alerts",
        answerD: "D. Numbers"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        answerA: "A. Quotes",
        answerB: "B. Curly brackets",
        answerC: "C. Parenthesis",
        answerD: "D. Square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answerA: "A. Numbers and strings",
        answerB: "B. Other arrays",
        answerC: "C. Booleans",
        answerD: "D. All of the above"
    },
    {
        question: "String values must be enclosed within _______ when beingassigned to variables.",
        answerA: "A. Commas",
        answerB: "B. Curly brackets",
        answerC: "C. Quotes",
        answerD: "D. Parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "A. JavaScript",
        answerB: "B. Terminal/Bash",
        answerC: "C. For loops",
        answerD: "D. console.log()"
    }
]

// Start the timer
var startGame = function() {
    setInterval(gameTimerUpdate, 1000);
    askQuestions();
}

// Update Timer
var gameTimerUpdate = function() {
    if (gameTimerNum === 0) {
        clearInterval(startGame);
    } else {
        gameTimerNum = gameTimerNum - 1;
        gameTimeEl.textContent = "Time: " + gameTimerNum;
    }
}

var askQuestions = function() {
    landingScreen.remove();
    displayQuestion();

    // Move counter to next question
    quizQuestions++;
}

var displayQuestion = function() {
    // Create container for question elements
    var questionSection = document.createElement("div");
    questionSection.setAttribute("id", "landing-screen");
    mainSection.appendChild(questionSection);

    // Display question
    var thisQuestion = document.createElement("h1");
    thisQuestion.textContent = quizQuestions[questionCounter].question;
    questionSection.appendChild(thisQuestion);

    // Create button section
    var buttonSection = document.createElement("div");
    buttonSection.setAttribute("id", "btn-section");
    mainSection.appendChild(buttonSection);

    // Display answer buttons
    var thisAnswerA = document.createElement("button");
    thisAnswerA.setAttribute("class", "answer-btn");
    thisAnswerA.setAttribute("id", "answer-a");
    thisAnswerA.textContent = quizQuestions[questionCounter].answerA;
    buttonSection.appendChild(thisAnswerA);

    listenForAnswer();
}

var listenForAnswer = function() {
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'answer-a'){
            console.log("TEST");
        }
    });
}

startButtonEl.addEventListener("click", startGame);