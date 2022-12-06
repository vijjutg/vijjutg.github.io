
const quizData = [
    {
        question: "Data stored inside RAM is known as?",
        a: "File",
        b: "Byte",
        c: "Registers",
        d: "Transistors",
        correct: "b",
    },
    {
        question: "The Process of taking the file from Harddisk and storing it in RAM is known as?",
        a: "Loading",
        b: "Linking",
        c: "Saving",
        d: "Compiling",
        correct: "a",
    },
    {
        question: "What is the extension of compiled JAVA file?",
        a: ".C",
        b: ".obj",
        c: ".class",
        d: ".exe",
        correct: "c",
    },
    {
        question: " _______ is a region in RAM to execute JAVA program",
        a: "JVM",
        b: "JIT",
        c: "JRE",
        d: "Byte",
        correct: "c",
    },
    {
        question: "Class files will be in _______",
        a: "Assembly level language",
        b: "High-level language",
        c: "Low-level language",
        d: "Intermediate level language",
        correct: "d",
    },
    {
        question: "_______ software can be coded on one platform and executed on any other platform.",
        a: "Portable",
        b: "Dynamic",
        c: "Secure",
        d: "None",
        correct: "a",
    },
    {
        question: " _________ software takes an executable file from the secondary memory and places it on the primary memory.",
        a: "Loader",
        b: "Linker",
        c: "Both a and b",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Java inbuilt functions will be in _______________",
        a: "Java libraries",
        b: "Source file",
        c: "Object file",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "JVM takes _______ as an input and produces _________ as output",
        a: "Byte code, Machine code",
        b: "Machine code, Byte code",
        c: "Byte code, Assembly level code",
        d: "None",
        correct: "a",
    },
    {
        question: "Does-part of an object is taken care by __________",
        a: "Datatypes",
        b: "Methods",
        c: "class name",
        d: "None",
        correct: "b",
    },
    {
        question: "Files can be executed on Harddisk?",
        a: "True",
        b: "False",
        c: "Sometimes true",
        d: "Sometimes false",
        correct: "b",
    },
    {
        question: "Harddisk is directly connected to RAM",
        a: "True",
        b: "False",
        c: "Sometimes true",
        d: "Sometimes false",
        correct: "a",
    },
    {
        question: "Data will be erased when the power supply is not flowing inside Harddisk?",
        a: "True",
        b: "False",
        c: "Sometimes true",
        d: "Sometimes false",
        correct: "b",
    },
    {
        question: "Object file gets executed once after it is converted as a .exe file?",
        a: "True",
        b: "False",
        c: "Sometimes true",
        d: "Sometimes false",
        correct: "a",
    },
    {
        question: "The Java compiler will take High-level language code as input and produce Machine-level language code as output",
        a: "True",
        b: "False", 
        c: "Sometimes true",
        d: "Sometimes false",
        correct: "b",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText= currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => { 
        if (answerEl.checked)
        {
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
  
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }
       else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()"> Reload </button>
        `
       } 
    }
})