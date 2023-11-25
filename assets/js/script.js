
//Create variables. Use HTML to check id's.

var countdown = document.getElementById("time");
var timeLeft = 75;
var timer;
var score = 0;
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
var highScoresPage = document.getElementById("highScoresPage");

//Create questions for quiz inside variable questions. 
//Create array of objects.
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
title: "Which of these operators checks whether its two operands are not equal?",
options: ["===", "!=", "!==", "+="],
answer: "!==",
}
]

//Start the quiz - on click of start button, first quiz question should appear.
//Create startGame function.
//On starting the game, the start question should be hidden.
//On starting the game, the question screen should appear.
//timer should begin on click of start button.
//create countdown timer function.

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
else if (timeLeft === 0) {
endQuiz();
} 
}, 1000)
}

//Create function to display question and answers
//Use innerText to dynamically change text of question and answers.

function displayQuestion () {
questionTitle.innerText = questions[i].title;
choiceA.innerText = questions[i].options[0];
choiceB.innerText = questions[i].options[1];
choiceC.innerText = questions[i].options[2];
choiceD.innerText = questions[i].options[3];
}

startButton.addEventListener("click", startGame);

//Check whether user selects correct answer.
//If user answer = correct answer, should increments by 5.
//If user answer !== correct answer, time decrements by 5.
//Use i++ to go through questions variable array.

function checkAnswer (event) {
var choice = event.target.innerText;
var correctAnswer = questions[i].answer;
if (choice !== correctAnswer) {
timeLeft -= 5;
} else if (choice === correctAnswer) {
score = score + 5;
}
i++;
if (i >= questions.length) {
questionScreen.classList.add("hide");
clearInterval (timer);
return;
}
displayQuestion ();
}

choices.addEventListener("click", checkAnswer);

//On final answer submission question screen should be hidden.
//End screen presented.
//End screen shows user score.

function showEndScreen () {
if (i >= questions.length){
endScreen.classList.remove("hide");
document.getElementById("final-score").innerHTML = score;
}
}

choices.addEventListener("click", showEndScreen);


function endQuiz () {
clearInterval (timer);
questionScreen.classList.add("hide");
endScreen.classList.remove("hide");
document.getElementById("final-score").innerHTML = score;
}

//Add event listener to submitButton. 
//On click of submit button, hide endScreen.
//On click of submit button, show highScores screen.
//Take input initials, get value and display initials + final score.


function getHighScores () {
endScreen.classList.add("hide");
highScoresPage.classList.remove("hide");
var initals = document.getElementById("initials").value;
document.getElementById("highscores").innerHTML = "1. " + initals + " " + score;
}

submitButton.addEventListener("click", getHighScores);
