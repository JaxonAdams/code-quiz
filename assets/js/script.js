var startButtonEl = document.getElementById("start-btn");
var gameTimeEl = document.getElementById("game-timer");
var gameTimerNum = 75;

// Start the timer
var gameTimer = function() {
    setInterval(gameTimerUpdate, 1000);
}

// Update Timer
var gameTimerUpdate = function() {
    if (gameTimerNum === 0) {
        clearInterval(gameTimer);
    } else {
        gameTimerNum = gameTimerNum - 1;
        gameTimeEl.textContent = "Time: " + gameTimerNum;
    }
}

startButtonEl.addEventListener("click", gameTimer);