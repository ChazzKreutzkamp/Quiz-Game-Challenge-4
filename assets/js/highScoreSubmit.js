var initialInputEl = document.querySelector("#initial-input");
var highScoreEl = document.querySelector("#high-score-text");
var pageContentEl = document.querySelector("#page-content");
var scoreSpanEl = document.querySelector("#score");
var recentScore = localStorage.getItem("recentScore");
var highscores = [];
var initializeScore = function () {
    scoreSpanEl.textContent = recentScore;
}
var inputHandler = function () {
    event.preventDefault();
    var initials = document.querySelector("input[name='initial-name']").value;
    if (!initials) {
        alert("You need to input your initials to submit your high score.");
    }
    else {
        var initialsAndScoresObj = {
            name: initials,
            score: recentScore
        }
        highScoreHandler(initialsAndScoresObj);
    }
}
var highScoreHandler = function (IAndSObj) {
    var localStorageChecker = localStorage.getItem("highScoreList");
    if (localStorageChecker === null) {
        highscores.push(IAndSObj);
        localStorage.setItem("highScoreList", JSON.stringify(highscores));
    }
    else {
        highscores = localStorageChecker;
        highscores.push(IAndSObj);
        localStorage.setItem("highScoreList", JSON.stringify(highscores));
    }
    initialInputEl.remove();
    highScoreEl.innerHTML = "<div id='submit-something'> <h2> Your Score Has Been Submitted </h2>" +
        "<a href='./highscore.html' class='anchor-btn'>Click Here to See the High Score List.</a>" +
        "<a href='./index.html' class='anchor-btn'>Click Here to Play Again.</a>";
}
initializeScore();
initialInputEl.addEventListener("submit", inputHandler);
