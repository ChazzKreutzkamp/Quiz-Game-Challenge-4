var playerInteractionEl = document.querySelector("#page-content");
var gameTime = 0;
var score = 0;
var questions = [
    {
        question = "What isn't a common data type?",
        possibility1 = "Strings",
        possibility2 = "Integers",
        possibility3 = "Booleans",
        possibility4 = "Alert",
        answer = "Alert"
    },
    {
        question = "What is a command that lets you view a variable in the console?",
        possibility1 = "a for loop",
        possibility2 = "console.log()",
        possibility3 = "debugger",
        possibility4 = "stringify",
        answer = "console.log()"
    },
    {
        question = "The arguments for an if statement are held within what?",
        possibility1 = "()",
        possibility2 = "{}",
        possibility3 = "quotation marks",
        possibility4 = "''",
        answer = "()"
    },
    {
        question = "The content after the logic of a for loop is declared is held within what?",
        possibility1 = "()",
        possibility2 = "{}",
        possibility3 = "quotation marks",
        possibility4 = "''",
        answer = "{}"
    },
    {
        question = "Arrays in Javascript can hold what?",
        possibility1 = "Numbers and Strings",
        possibility2 = "Objects",
        possibility3 = "Other arrays",
        possibility4 = "All of the above",
        answer = "All of the above"
    },
    {
        question = "",
        possibility1 = "",
        possibility2 = "",
        possibility3 = "",
        possibility4 = "",
        answer = ""
    },
    {
        question = "Which is a correct method to initialize the logic of a for loop?",
        possibility1 = "(var i = 0; i < 5; i++)",
        possibility2 = "(i++; i < 5)",
        possibility3 = "(i < 5; i++; var i = 0)",
        possibility4 = "(var i = 0, i < 5, i--)",
        answer = "(var i = 0; i < 5; i++)"
    },
    {
        question = "A while loop continues to execute until?",
        possibility1 = "The argument in its logic is true.",
        possibility2 = "The argument in its logic is false.",
        possibility3 = "It's an infinite loop, why would I need to stop it?",
        possibility4 = "Until I say so!",
        answer = "The argument in its logic is false."
    },
    {
        question = "A string needs to be enclosed in what to be registed to a variable?",
        possibility1 = "()",
        possibility2 = "''",
        possibility3 = "quotation marks",
        possibility4 = "{}",
        answer = "quotation marks"
    },
    {
        question = "How do you initialize the debugger in JavaScript?",
        possibility1 = "debugger;",
        possibility2 = "debug: this code;",
        possibility3 = "bugReport();",
        possibility4 = "bugLocate();",
        answer = "debugger;"
    }
]
