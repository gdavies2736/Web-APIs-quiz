
//Create variables. Use HTML to check id's.

var countdown = document.getElementById("time");
var timeLeft = 75;
var timer;
var score = 0;
var highScores = [];
var i = 0;
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var enterInitials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

//Create questions for quiz inside variable
//Should contain question title, options and answer.

var questions = [ 
 {
title: "What is the correct command to print something to the developer console?",
options: ["consolelog.();", "log.console();","console.log()", "()console.log;"],
answer: "console.log()"
},
{
 title:"Which of the following statements creates a variable in Javascript?",
 options: ["ver", "var", "rav", "vra"], 
 answer: "var"  
},
{
title: "What does iteration mean?",
options: ["The repetition of a process", "The end of a process", "The start of a process", "It only happens once"],
answer: "The repetition of a process",
},
{
title: "Which method removes the last element from an array and returns that element?",
options: ["shift()", "undo()", "unshift()", "pop()" ],
answer: "pop()",
},
{
title: "Which of these operators checks whether its two operands are note equal?",
options: ["===", "!=", "!==", "+="],
answer: "!==",
}
]

//Start the quiz - on click of start button, first quiz question should appear
//timer should begin on click of start button.
//create timer 
//Need intro text to disappear and question and answer to appear.

//Countdown timer function
//From above - var countdown = document.getElementById("time");
//From above - var timeLeft = 75;

function startGame () {
startScreen.style.display = "none";
questionScreen.classList.remove("hide");
startTimer()
displayQuestion ()
}

function startTimer () {
timer = setInterval(function(){
if (timeLeft > 0){
timeLeft -= 1
countdown.innerText = timeLeft
}   
}, 1000)
}

function displayQuestion () {
questionTitle.innerText = questions[i].title;
choiceA.innerText = questions[i].options[0];
choiceB.innerText = questions[i].options[1];
choiceC.innerText = questions[i].options[2];
choiceD.innerText = questions[i].options[3];
}

/*document.getElementById("time").textContent = timeLeft;
if (timeLeft <=0) {

};*/

startButton.addEventListener("click", startGame);

choices.addEventListener("click", checkAnswer);

function checkAnswer (event) {
var choice = event.target.innerText;
var correctAnswer = questions[i].answer;
if (choice !== correctAnswer) {
timeLeft -= 5;
}
i++;
if (i >= questions.length) {
questionScreen.classList.add("hide");
return;
}
displayQuestion ();
}

//On click - start quiz - X random selection, would it be a for loop to work through each question?
//On click needs to be on every button
//on click needs to generate new question and array of options 
//if correct answer selected, display "Correct!"
//else display "Wrong!"

//Need function for quiz end - stop timer with clear interval, end screen to show final score, code to hide questions section. 
//How to change from first page into questions - options

//**How it's going to work**/


