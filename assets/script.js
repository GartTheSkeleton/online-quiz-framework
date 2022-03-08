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
var endQuizSection = document.querySelector(".end-quiz-section");
var scoreBoard = document.querySelector(".scoreboard");

var scoreBox = document.querySelector(".scoreBox");

//defines player's score
let playerScore = 0;
//tracks current question
let questionCounter = 0
//holds the answer the user chose
let answer = 1
//array to store highscores in, and a second array for the names tied to those highscores
let highscores = [0,0,0,0];
let highscoreNames = ["?","?","?","?"]
//constants storing the questions
const question1 = {question:"Question 1 text here", answer1:"This is the correct answer", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question2 = {question:"Question 2 text here", answer1:"Answer text here", answer2:"This is the correct answer", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:2}
const question3 = {question:"Question 3 text here", answer1:"This is the correct answer", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question4 = {question:"Question 4 text here", answer1:"This is the correct answer", answer2:"Answer text here", answer3:"Answer text here", answer4:"Answer text here", correctAnswer:1}
const question5 = {question:"Question 5 text here", answer1:"Answer text here", answer2:"Answer text here", answer3:"This is the correct answer", answer4:"Answer text here", correctAnswer:3}
//an array to refer to the questions individually
var questionArray = [question1, question2, question3, question4, question5]

//variable targeting the question title
var questionTitle = document.querySelector("#question-title");
//variables targeting the answer buttons
var questionBtn1 = document.querySelector("#questionBtn1");
var questionBtn2 = document.querySelector("#questionBtn2");
var questionBtn3 = document.querySelector("#questionBtn3");
var questionBtn4 = document.querySelector("#questionBtn4");

//variable targeting the end-screen score display
var yourScoreHere = document.querySelector("#your-score-here");

//variables targeting the highscore slots
var highscore1 = document.querySelector(".highscore1");
var highscore2 = document.querySelector(".highscore2");
var highscore3 = document.querySelector(".highscore3");
var highscore4 = document.querySelector(".highscore4");

var scoreboard1 = document.querySelector(".scoreboard1");
var scoreboard2 = document.querySelector(".scoreboard2");
var scoreboard3 = document.querySelector(".scoreboard3");
var scoreboard4 = document.querySelector(".scoreboard4");

var recordScoreBtn = document.querySelector("#record-score");
var viewScoresBtn = document.querySelector("#view-scores-button");
var doneBtn = document.querySelector("#doneBtn");
var finishBtn = document.querySelector("#end-game")

//Function to begin the quiz from the title screen
var quizStartQuiz = function(){
    console.log("started");
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
    scoreBox.style.display = "none";
    endQuizSection.style.display = "inline";

    yourScoreHere.textContent = playerScore;

    playerScore = 0;

    highscore1.textContent = highscores[0] +" "+ highscoreNames[0];
    highscore2.textContent = highscores[1] +" "+ highscoreNames[1];
    highscore3.textContent = highscores[2] +" "+ highscoreNames[2];
    highscore4.textContent = highscores[3] +" "+ highscoreNames[3];
}

var loadScoreboard = function(){
    scoreBoard.style.display = "inline";
    endQuizSection.style.display = "none";
    titleScreen.style.display = "none";
    scoreboard1.textContent = highscores[0] +" "+ highscoreNames[0];
    scoreboard2.textContent = highscores[1] +" "+ highscoreNames[1];
    scoreboard3.textContent = highscores[2] +" "+ highscoreNames[2];
    scoreboard4.textContent = highscores[3] +" "+ highscoreNames[3];
}

var recordScore = function(){
    var workingScore = yourScoreHere.textContent;
    var workingScore = parseInt(workingScore);
    var playerName = window.prompt("Enter Your Name");
    var boardUpdated = false

    if (workingScore > highscores[3]){
        if (workingScore > highscores[2]){
            if (workingScore > highscores[1]){
                if (workingScore > highscores[0]){
                    highscores[3] = highscores[2];
                    highscoreNames[3] = highscoreNames[2];
                    highscores[2] = highscores[1];
                    highscoreNames[2] = highscoreNames[1];
                    highscores[1] = highscores[0];
                    highscoreNames[1] = highscoreNames[0];
                    highscores[0] = workingScore;
                    highscoreNames[0] = playerName;
                    boardUpdated = true;
                 }
                else {
                    highscores[3] = highscores[2];
                    highscoreNames[3] = highscoreNames[2];
                    highscores[2] = highscores[1];
                    highscoreNames[2] = highscoreNames[1];
                    highscores[1] = workingScore;
                    highscoreNames[1] = playerName;
                    boardUpdated = true
                }  
            }
            else {
                highscores[3] = highscores[2];
                highscoreNames[3] = highscoreNames[2];
                highscores[2] = workingScore;
                highscoreNames[2] = playerName; 
            }
        }
        else {
            highscores[3] = workingScore;
            highscoreNames[3] = playerName;
        }
    }
loadScoreboard();
}

var returnHome = function(){
    titleScreen.style.display = "inline"; 
    scoreBoard.style.display = "none";
    endQuizSection.style.display = "none";
    quizScreen.style.display = "none";
    scoreBox.style.display = "none";
}


startQuizButton.addEventListener("click", quizStartQuiz);

questionBtn1.addEventListener("click", chooseAnswer1);
questionBtn2.addEventListener("click", chooseAnswer2);
questionBtn3.addEventListener("click", chooseAnswer3);
questionBtn4.addEventListener("click", chooseAnswer4);

recordScoreBtn.addEventListener("click", recordScore);

doneBtn.addEventListener("click", returnHome);
viewScoresBtn.addEventListener("click", loadScoreboard);
finishBtn.addEventListener("click", returnHome);