//Declare relevant variables

//define the timer
const defaultTimerValue = 120;
var timer = defaultTimerValue;

//define terminology for different sections of the webpage
var quizContainer = document.querySelector("#quizContainer");
var startQuizButton = document.querySelector("#start-button");
var scoresButton = document.querySelector("#view-scores-button");
var titleScreen = document.querySelector(".start-quiz-section");
var quizScreen = document.querySelector(".quiz-section");

//defines player's score
let playerScore = 0;
//tracks current question
let questionCounter = 0
//array to store highscores in, and a second array for the names tied to those highscores
let highscores = [0,0,0,0,0];
let highscoreNames = ["?","?","?","?","?"]
//constants storing the questions
const question1 = {question:"Question text here", answer1:"Answer 1 text here", answer2:"Answer 2 text here", answer3:"Answer 3 text here", answer4:"Answer 4 text here", correctAnswer:1}
const question2 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question3 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question4 = {question:"Question text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
//an array to refer to the questions individually
var questionArray = [question1, question2, question3, question4]
//adds buttons for the 4 answers to each question to the DOM
var questionBtn1 = document.createElement("button")
var questionBtn2 = document.createElement("button")
var questionBtn3 = document.createElement("button")
var questionBtn4 = document.createElement("button")
var buttonArray = [questionBtn1, questionBtn2, questionBtn3, questionBtn4]

//Function to begin the quiz from the title screen
var quizStartQuiz = function(){
    //hides title screen
    titleScreen.style.display = "none";
    //creates title div for the questions
    var questionTitle = document.createElement("h1");
    //writes textcontent to the question and answers and appends them to the DOM
    questionTitle.textContent = questionArray[questionCounter].question;
    quizScreen.appendChild(questionTitle);
    buttonArray[0].textContent = questionArray[questionCounter].answer1;
    quizScreen.appendChild(buttonArray[0])
    buttonArray[1].textContent = questionArray[questionCounter].answer2;
    quizScreen.appendChild(buttonArray[1])
    buttonArray[2].textContent = questionArray[questionCounter].answer3;
    quizScreen.appendChild(buttonArray[2])
    buttonArray[3].textContent = questionArray[questionCounter].answer4;
    quizScreen.appendChild(buttonArray[3])
}
//Function to display the quiz's questions


//Function to end the quiz when time runs out

//Function to end the quiz when the last question is reached

startQuizButton.addEventListener("click", quizStartQuiz);