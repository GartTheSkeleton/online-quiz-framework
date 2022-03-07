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

var scoreBox = document.querySelector(".scoreBox")

//defines player's score
let playerScore = 0;
//tracks current question
let questionCounter = 0
//holds the answer the user chose
let answer = 1
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

//variable targeting the question title
var questionTitle = document.querySelector("#question-title");
//variables targeting the answer buttons
var questionBtn1 = document.querySelector("#questionBtn1");
var questionBtn2 = document.querySelector("#questionBtn2");
var questionBtn3 = document.querySelector("#questionBtn3");
var questionBtn4 = document.querySelector("#questionBtn4");
// var buttonArray = [questionBtn1, questionBtn2, questionBtn3, questionBtn4]

//Function to begin the quiz from the title screen
var quizStartQuiz = function(){
    //hides title screen
    titleScreen.style.display = "none";
    //reveals question block
    quizScreen.style.display = "inline";
    //reveals score counter
    scoreBox.style.display = "inline";
    //writes score to scorebox
    scoreBox.textContent = "Score:" + playerScore;
    //writes textcontent to the question and answers
    questionTitle.textContent = questionArray[questionCounter].question;
    questionBtn1.textContent = questionArray[questionCounter].answer1;
    questionBtn2.textContent = questionArray[questionCounter].answer2;
    questionBtn3.textContent = questionArray[questionCounter].answer3;
    questionBtn4.textContent = questionArray[questionCounter].answer4;
}
//functions to store what answer the user chose
var chooseAnswer1 = function(){
    answer = 1;
    quizProceed();
}
var chooseAnswer2 = function(){
    answer = 2;
    quizProceed();
}
var chooseAnswer3 = function(){
    answer = 3;
    quizProceed();
}
var chooseAnswer4 = function(){
    answer = 4;
    quizProceed();
}

//Function to check answer and proceed to the next question
var quizProceed = function(){
    if (answer === questionArray[questionCounter].correctAnswer){
        playerScore += 1
        scoreBox.textContent = "Score:" + playerScore;
    }

    questionCounter += 1

    if (questionCounter >= questionArray.length){
        endQuiz();
    } else {
    //writes textcontent to the question and answers
    questionTitle.textContent = questionArray[questionCounter].question;
    questionBtn1.textContent = questionArray[questionCounter].answer1;
    questionBtn2.textContent = questionArray[questionCounter].answer2;
    questionBtn3.textContent = questionArray[questionCounter].answer3;
    questionBtn4.textContent = questionArray[questionCounter].answer4;
    }
}
//Function to end the quiz when time runs out


//Function to end the quiz when the last question is answered
var endQuiz = function(){
    questionCounter = 0;
    quizScreen.style.display = "none";
    titleScreen.style.display = "inline";
}


startQuizButton.addEventListener("click", quizStartQuiz);

questionBtn1.addEventListener("click", chooseAnswer1);
questionBtn2.addEventListener("click", chooseAnswer2);
questionBtn3.addEventListener("click", chooseAnswer3);
questionBtn4.addEventListener("click", chooseAnswer4);