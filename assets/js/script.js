var startButtonEl = document.getElementById("start-btn");
var gameTimeEl = document.getElementById("game-timer");
var gameTimerNum = 10;

// Start the timer
var gameTimer = function() {
    setInterval(gameTimerUpdate, 1000);
}

// Update Timer
var gameTimerUpdate = function() {
    gameTimerNum = gameTimerNum - 1;
    gameTimeEl.textContent = "Time: " + gameTimerNum;

    if (gameTimerNum === 0) {
        clearInterval(gameTimer);
    }

    console.log(gameTimerNum);
}

startButtonEl.addEventListener("click", gameTimer);