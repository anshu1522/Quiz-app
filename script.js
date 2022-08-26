
const quizData = [
    {
        question: 'What is the best thing you like about me',
        a: 'caring',
        b: 'attitude',
        c: 'flirty',
        d: 'all of the above',
    }, {
        question: 'The most romantic place you would want to visit',
        a: 'Shimla',
        b: 'Manali',
        c: 'Goa',
        d: 'all of the above',
    }, {
        question: 'What is your favorite color',
        a: 'red',
        b: 'purple',
        c: 'violet',
        d: 'none of these',
    }, {
        question: 'Which type of movies do you prefer to watch',
        a: 'romantic',
        b: 'comedy',
        c: 'horror',
        d: 'sci-fi',
    }, {
        question: 'What is your favourite dish',
        a: 'chhole bhature',
        b: 'samosa',
        c: 'panipuri',
        d: 'none of these',
    }
]
let results = [];
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btn');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
let curentQuiz = 0;
const start_cont = document.getElementById('start-cont');
const st_btn = document.getElementById('start-btn');
st_btn.addEventListener('click', () => {
    console.log('niru');
    start_cont.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});
quiz.style.display = 'none';

function getselected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            results.push(answer);
        }
    });
    return answer;
}
function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[curentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getselected();
    if (answer) {
        curentQuiz++;
        if (curentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> Your answerd is...</h2>
                    <ul>
                       <li><h2>1.${results[0]}</h2></li>
                       <li><h2>2.${results[1]}</h2></li>
                       <li><h2>3.${results[2]}</h2></li>
                       <li><h2>4.${results[3]}</h2></li>
                       <li><h2>5.${results[4]}</h2></li>
                    </ul>
   <button onclick="location.reload()">Restart</button>`;
        }
    }
})

