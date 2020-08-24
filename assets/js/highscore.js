var highScoreEl = document.querySelector("#high-score");

var loadHighScores = function () {
    var highScoreList = localStorage.getItem("highScoreList");
    if (highScoreList === null) {
        return false;
    }
    highScoreList = JSON.parse(highScoreList);
    for (var i = 0; i < highScoreList.length; i++) {
        loadScoreElements(highScoreList[i], i);
    }
}
var loadScoreElements = function (highscoreObj, iteration) {
    var name = highscoreObj.name;
    var number = iteration + 1;
    var score = highscoreObj.score;
    var listItemEl = document.createElement("li");
    listItemEl.innerHTML = "<h3>" + number + ". " + name + " - " + score + " points</h3>";
    highScoreEl.appendChild(listItemEl);
}

loadHighScores();