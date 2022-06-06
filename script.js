const quizData = [
    {
        question: 'How old is Damian?',
        a: '15',
        b: '20',
        c: '25',
        d: '102',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the President of the US?',
        a: 'Damian Reyes',
        b: 'Valeria Cortez',
        c: 'Joe Biden',
        d: 'Danny Devito',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
]

const questionEl = document.getElementById ('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d



}

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    loadQuiz();
})