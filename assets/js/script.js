//Timer function

//View highscores


//Create questions for quiz inside variable

var timer = document.getElementById("time");
var time = 75;
var score = 0;
var highScores = [];
var i = 0;
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementByID("question-title");
var choiceA = document.getElementByID("choiceA");
var choiceB = document.getElementByID("choiceB");
var choiceC = document.getElementByID("choiceC");
var choiceD = document.getElementByID("choiceD");
var endScreen = document.getElementByID("end-screen");
var finalScore = document.getElementByID("final-score");
var submitButton = document.getElementByID("submit");
var enterInitials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

var questions = [ 
 {
title: "What is the correct command to print something to the developer console?",
options: ["consolelog.();", "log.console();","console.log()", "()console.log;"],
answer: "console.log()"
},
{
 title:"Which of the following statements creates a variable in Javascript?",
 options: ["ver", "var", "rav", "vra"] 
 answer: "var"  
},
{
title: "What does iteration mean?",
options: ["The repetition of a process", "The end of a process", "The start of a process", "It only happens once"],
answer: "The repetition of a process"
}
{
title: "Which method removes the last element from an array and returns that element?",
options: ["shift()", "undo()", "unshift()", "pop()" ],
answer: "pop()"
}
{
title: "Which of these operators checks whether its two operands are note equal?",
options: ["===", "!=", "!==", "+="],
answer: "!==",
}
]

//button id="start"

//On click - start quiz - X random selection, would it be a for loop to work through each question?
//On click needs to be on every button
//on click needs to generate new question and array of options 
//if correct answer selected, display "Correct!"
//else display "Wrong!"

//Need function for quiz end - stop timer with clear interval, end screen to show final score, code to hide questions section. 
//How to change from first page into questions - options

//**How it's going to work**/


