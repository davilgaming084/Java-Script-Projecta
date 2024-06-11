let allQuestions = [
    {
        question: "1) HTML stands for _____",
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlinks and Text Markup Level',
        ans: 'a' // Correct answer
    },
    {
        question: "2) CSS stands for _____",
        a: 'Creative Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Colorful Style Sheets',
        d: 'Computer Style Sheets',
        ans: 'b' // Correct answer
    },
    {
        question: "3) What does DOM stand for?",
        a: 'Document Object Model',
        b: 'Digital Object Model',
        c: 'Direct Object Manipulation',
        d: 'Desktop Oriented Mode',
        ans: 'a' // Correct answer
    },
    {
        question: "4) JavaScript is a _____ language.",
        a: 'Client-side scripting',
        b: 'Server-side scripting',
        c: 'Both',
        d: 'None of the above',
        ans: 'c' // Correct answer
    },
    {
        question: "5) Which symbol is used for comments in JavaScript?",
        a: '//',
        b: '/* */',
        c: '#',
        d: '--',
        ans: 'a' // Correct answer
    }
];

let index = 0;
let total = allQuestions.length;
let right = 0;
let wrong = 0;
let QuestionsBox = document.querySelector('.Questions');
let labels = document.querySelectorAll('label');

function loadQuestion() {
    let data = allQuestions[index];
    QuestionsBox.textContent = data.question;
    labels[0].innerText = data.a;
    labels[1].innerText = data.b;
    labels[2].innerText = data.c;
    labels[3].innerText = data.d;
}

loadQuestion();

document.querySelector('.submit').addEventListener('click', () => {
    let inputs = document.querySelectorAll('.demo');
    inputs.forEach((input) => {
        if (input.checked) {
            if (input.value === allQuestions[index].ans) {
                right++;
            } else {
                wrong++;
            }
        }
    });
    
    index++;
    if (index < total) {
        loadQuestion();
    } else {
        displayResults();
    }
});

function displayResults() {
    document.querySelector('.container').innerText = `All questions answered.\nCorrect answers: ${right}\nWrong answers: ${wrong}`;
}
