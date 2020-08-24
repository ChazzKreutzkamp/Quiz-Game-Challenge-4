var pageContentEl = document.querySelector("#page-content");
var questionContentEl = document.querySelector("#question-content");
var questionTextEl = document.querySelector("#question-text");
var answersContentEl = document.querySelector("#answers-content");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var cOrI = document.querySelector("#correct-or-incorrect");
var score = 0;
var time = 65;
var questionIndex = 0;
var questionAnswer = "";
var questions = [
    {
        question: "What isn't a common data type?",
        possibility1: "Strings",
        possibility2: "Integers",
        possibility3: "Booleans",
        possibility4: "Alert",
        answer: "Alert"
    },
    {
        question: "What is a command that lets you view a variable in the console?",
        possibility1: "a for loop",
        possibility2: "console.log()",
        possibility3: "debugger",
        possibility4: "stringify",
        answer: "console.log()"
    },
    {
        question: "The arguments for an if statement are held within what?",
        possibility1: "()",
        possibility2: "{}",
        possibility3: "quotation marks",
        possibility4: "''",
        answer: "()"
    },
    {
        question: "The content after the logic of a for loop is declared is held within what?",
        possibility1: "()",
        possibility2: "{}",
        possibility3: "quotation marks",
        possibility4: "''",
        answer: "{}"
    },
    {
        question: "Arrays in Javascript can hold what?",
        possibility1: "Numbers and Strings",
        possibility2: "Objects",
        possibility3: "Other arrays",
        possibility4: "All of the above",
        answer: "All of the above"
    },
    {
        question: "Free Points!",
        possibility1: "Free Points!",
        possibility2: "Free Points!",
        possibility3: "Free Points!",
        possibility4: "Free Points!",
        answer: "Free Points!"
    },
    {
        question: "Which is a correct method to initialize the logic of a for loop?",
        possibility1: "(var i = 0; i < 5; i++)",
        possibility2: "(i++; i < 5)",
        possibility3: "(i < 5; i++; var i = 0)",
        possibility4: "(var i = 0, i < 5, i--)",
        answer: "(var i = 0; i < 5; i++)"
    },
    {
        question: "A while loop continues to execute until?",
        possibility1: "The argument in its logic is true.",
        possibility2: "The argument in its logic is false.",
        possibility3: "It's an infinite loop, why would I need to stop it?",
        possibility4: "Until I say so!",
        answer: "The argument in its logic is false."
    },
    {
        question: "A string needs to be enclosed in what to be registed to a variable?",
        possibility1: "()",
        possibility2: "''",
        possibility3: "quotation marks",
        possibility4: "{}",
        answer: "quotation marks"
    },
    {
        question: "How do you initialize the debugger in JavaScript?",
        possibility1: "debugger;",
        possibility2: "debug: this code;",
        possibility3: "bugReport();",
        possibility4: "bugLocate();",
        answer: "debugger;"
    }
]

var playGame = function () {
    time = 65;
    score = 0;
    var timeInterval = setInterval(function () {
        if (time >= 1) {
            timerEl.textContent = time;
            time--;
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "0";
            gameEnd();
        }
    }, 1000);
    loadQuestion(questionIndex);
}
var loadQuestion = function (questionIndex) {
    if (questionIndex === questions.length) {
        time = 0;
        gameEnd();
    }
    else {
        questionContentEl.textContent = questions[questionIndex].question;
        answerBtn1.textContent = questions[questionIndex].possibility1;
        answerBtn2.textContent = questions[questionIndex].possibility2;
        answerBtn3.textContent = questions[questionIndex].possibility3;
        answerBtn4.textContent = questions[questionIndex].possibility4;
        questionAnswer = questions[questionIndex].answer;
    }
}
var buttonHandler = function () {
    var btnId = event.target.getAttribute("id");
    var btnEl = answersContentEl.querySelector("#" + btnId);
    var messageTime = 3;
    console.log(btnEl);
    if (btnEl.textContent === questionAnswer) {
        var timeInterval = setInterval(function () {
            if (messageTime >= 1) {
                cOrI.textContent = "Correct";
                messageTime--;
            } else {
                clearInterval(timeInterval);
                cOrI.textContent = "";
            }
        }, 1000);
        score++;
        questionIndex++;
        loadQuestion(questionIndex);
    }
    else {
        var timeInterval = setInterval(function () {
            if (messageTime >= 1) {
                cOrI.textContent = "Incorrect";
                messageTime--;
            } else {
                clearInterval(timeInterval);
                cOrI.textContent = "";
            }
        }, 1000);
        time -= 10;
        questionIndex++;
        loadQuestion(questionIndex);
    }
}
var gameEnd = function (){
    questionContentEl.remove();
    answersContentEl.remove();
    pageContentEl.innerHTML = "<div id='submit-something'> <h2> Game Over </h2>" +
    "<a href='./highScoreSubmit.html' class='anchor-btn'> Click Here to Submit your score! click here.</a>" +
    "<a href='./index.html' class='anchor-btn'>Click Here to Play Again</a>";
    localStorage.setItem("recentScore", score); 
}
playGame()
answersContentEl.addEventListener("click", buttonHandler);

