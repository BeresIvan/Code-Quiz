const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestions = {};
let acceptingAmswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "How do you insert COMMENTS in Java code?",
        choice1: "/* This is a comment",
        choice2: "// This is a comment",
        choice3: "# This is a comment",
        choice4: "$ This is a comment",
        answer: 1
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        choice1: "x = 5;",
        choice2: "int x = 5;",
        choice3: "float x = 5;",
        choice4: "num x = 5",
        answer: 2
    },
    {
        question: "Which method can be used to find the length of a string?",
        choice1: "getLength()",
        choice2: "len()",
        choice3: "length() ",
        choice4: "getSize()",
        answer: 3
    },
    {
        question: "Which operator can be used to compare two values?",
        choice1: "== ",
        choice2: "=",
        choice3: "<>",
        choice4: "><",
        answer: 1
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        choice1: "toUpperCase()",
        choice2: "upperCase()",
        choice3: "touppercase()",
        choice4: "tuc()",
        answer: 1
    },
    {
        question: "Which keyword is used to return a value inside a method?",
        choice1: "return ",
        choice2: "break",
        choice3: "void",
        choice4: "get",
        answer: 1
    },
    {
        question: "Which keyword is used to import a package from the Java API library?",
        choice1: "lib",
        choice2: "package",
        choice3: "import ",
        choice4: "getlib",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "Which is the correct syntax for reffering to an external script called game.js?",
        choice1: "<script href='game.js'",
        choice2: "<script name='game.js'",
        choice3: "<script src='game.js' ",
        choice4: "<script file='game.js'",
        answer: 3
    },
];


const CORRECT_BONUS = 10;
const Max_QUESTIONS = 9;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
  
    availableQuestions.splice(questionIndex, 1);
    acceptingAmswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    getNewQuestion();

    
  });
});

startGame();