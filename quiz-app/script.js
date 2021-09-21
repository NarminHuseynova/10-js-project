const quizData = [
    {
        question: 'CSS açılımı hangisinde doğru olarak verilmişdir?',
        a: 'Custom Style Sheets',
        b: 'Colorful Style Sheets',
        c: 'Computer Style Sheets',
        d: 'Cascading Style Sheets',
        correct: 'd'
    },{
        question: 'CSS de zemin rengini değiştirmek için ne kullanılır?',
        a: 'background-color:',
        b: 'bg-color:',
        c: 'bground:',
        d: 'b-color:',
        correct: 'a'
    },{
        question: 'margin: 5px 10px 3px 8px; dizilimine gore sol dış boşluk değeri kaç px olmuşdur?',
        a: '3px',
        b: '10px',
        c: '8px',
        d: '5px',
        correct: 'c'
    },{
        question: '# işareti hangi seçiciyi belirtir?',
        a: 'class',
        b: 'tag',
        c: 'first',
        d: 'id',
        correct: 'd'
    },{
        question: 'Global CSS kullanımında, stil şablonumuzu hangi etiket içinde tanımlarız?',
        a: 'script',
        b: 'style',
        c: 'stile',
        d: 'css',
        correct: 'b'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();
    
    if (answer){
        if (answer === quizData[currentQuiz].correct) {
           
            score++;
        }
        currentQuiz++;
        log(currentQuiz)
        if(currentQuiz < quizData.length) {
            
            loadQuiz();
            
        } else {
            
            quiz.innerHTML = `<h2> You answered
            correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick ="location.reload()">Reload</button>`;
        }
    }
});


function log(a) {
    console.log(a)
}