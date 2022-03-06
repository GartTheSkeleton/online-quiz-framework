//Declare relevant variables
const defaultTimerValue = 120;
var timer = defaultTimerValue;

var quizContainer = document.querySelector("#quizContainer");
var startQuizButton = document.querySelector("#start-button");
var scoresButton = document.querySelector("#view-scores-button");
var titleScreen = document.querySelector(".start-quiz-section");
var quizScreen = document.querySelector(".quiz-section");

let playerScore = 0;

let questionCounter = 0

let highscores = [0,0,0,0,0];
let highscoreNames = ["?","?","?","?","?"]

const question1 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question2 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question3 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question4 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}

var questionArray = [question1, question2, question3, question4]


//Function to begin the quiz from the title screen
var quizStartQuiz = function(){
titleScreen.style.display = "none";

var questionTitle = document.createElement("h1");
questionTitle.textContent = questionArray[questionCounter].question;
quizScreen.appendChild(questionTitle);
}
//Function to display the quiz's questions


//Function to end the quiz when time runs out

//Function to end the quiz when the last question is reached

startQuizButton.addEventListener("click", quizStartQuiz);