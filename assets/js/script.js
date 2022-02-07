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
        answerC: "C. A, B, and D",
        answerD: "D. Booleans",
        correctAnswer: "C"
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

    var thisAnswerB = document.createElement("button");
    thisAnswerB.setAttribute("class", "answer-btn");
    thisAnswerB.setAttribute("id", "answer-b");
    thisAnswerB.textContent = quizQuestions[questionCounter].answerB;
    buttonSection.appendChild(thisAnswerB);

    var thisAnswerC = document.createElement("button");
    thisAnswerC.setAttribute("class", "answer-btn");
    thisAnswerC.setAttribute("id", "answer-c");
    thisAnswerC.textContent = quizQuestions[questionCounter].answerC;
    buttonSection.appendChild(thisAnswerC);

    var thisAnswerD = document.createElement("button");
    thisAnswerD.setAttribute("class", "answer-btn");
    thisAnswerD.setAttribute("id", "answer-d");
    thisAnswerD.textContent = quizQuestions[questionCounter].answerD;
    buttonSection.appendChild(thisAnswerD);

    // Move counter to next question
    questionCounter++;

    listenForAnswer();
}

var listenForAnswer = function() {
    document.addEventListener("click",function(e){
        if((e.target && e.target.id== "answer-a") || (e.target && e.target.id== "answer-b") || (e.target && e.target.id== "answer-c") || (e.target && e.target.id== "answer-d")){
            if (questionCounter < quizQuestions.length) {
                displayQuestion();

                // Validate answer clicked
                if (e.target.id== "answer-c") {
                        alert("Correct!");
                    } else if (e.target.id== "answer-a" || e.target.id== "answer-b" || e.target.id== "answer-d") {
                        alert("Incorrect!");
                    }
                
                // Clear previous question
                var previousQuestion = document.querySelector("#landing-screen");
                var previousAnswerA = document.querySelector("#answer-a");
                var previousAnswerB = document.querySelector("#answer-b");
                var previousAnswerC = document.querySelector("#answer-c");
                var previousAnswerD = document.querySelector("#answer-d");
                previousQuestion.remove();
                previousAnswerA.remove();
                previousAnswerB.remove();
                previousAnswerC.remove();
                previousAnswerD.remove();
            }
        }
    });
}

startButtonEl.addEventListener("click", startGame);