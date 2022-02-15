var getName = function() {
    return localStorage.getItem("playerName");
};

var getScore = function() {
    return localStorage.getItem("playerScore");
};

var updateHTML = function() {
    var name = getName();
    var score = getScore();

    document.querySelector(".display-highscore").innerHTML = name + " scored " + score + " points.";
}

updateHTML();