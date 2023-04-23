const questions = [{
    question: "Who is the father of HTML?",

    answers: [{
            text: "Rasmus Lerdorf",
            correct: false
        },
        {
            text: "Brendan Eich",
            correct: false
        },
        {
            text: " Sergey Brin",
            correct: false
        },
        {
            text: "Tim Berners-Lee",
            correct: true
        },
    ]
},
{
    question: "HTML stand for____________",
    answers: [{
            text: "HyperText Machine Language",

            correct: false
        },
        {
            text: "HyperText Markup Language",
            correct: true
        },
        {
            text: "HyperText Marking Language",
            correct: false
        },
        {
            text: "HighText Marking Language",
            correct: false
        },
    ]
},
{
    question: "How many sizes of headers are available in HTML by default?",
    answers: [{
            text: "4",
            correct: false
        },
        {
            text: "1",
            correct: false
        },
        {
            text: "5",
            correct: false
        },
        {
            text: "6",
            correct: true
        },
    ]
},
{
    question: "What is the smallest header in HTML by default?",
    answers: [{
            text: "h5",
            correct: false
        },
        {
            text: "h2",
            correct: false
        },
        {
            text: "h6",
            correct: true
        },
        {
            text: "h4",
            correct: false
        },
    ]
},
{
    question: "What are the types of lists available in HTML?",

    answers: [{
            text: "Named and UnNamed",
            correct: false
        },
        {
            text: "Ordered and Unordered List",
            correct: true
        },
        {
            text: "Bulleted and Numbered",
            correct: false
        },
        {
            text: "None of the above",
            correct: false
        },
    ]
},
{
    question: "Which of the following is used to read an HTML page and render it?",

    answers: [{
            text: "Web browser",
            correct: true
        },
        {
            text: "Web network",
            correct: false
        },
        {
            text: "Web server",
            correct: false
        },
        {
            text: " Web matrix",
            correct: false
        },
    ]
},
{
    question: "HTML files are saved by default with the extension?",
    answers: [{
            text: ".ht",
            correct: false
        },
        {
            text: ".html",
            correct: true
        },
        {
            text: ".h",
            correct: false
        },
        {
            text: ".htm",
            correct: false
        },
    ]
},
{
    question: "We enclose HTML tags within?",
    answers: [{
            text: "{}",
            correct: false
        },
        {
            text: "[]",
            correct: false
        },
        {
            text: "<>",
            correct: true
        },
        {
            text: "!!",
            correct: false
        },
    ]
}


];

const questionElemnet = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();

}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElemnet.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState() {

nextButton.style.display = "none";
while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
}
}

function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
} else {
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showscore();
}
}

function showscore() {
resetState();
questionElemnet.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz();
}
})

startQuiz();