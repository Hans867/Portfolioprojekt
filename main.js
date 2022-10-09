// When you press start, the startButton and header disappears .add('hide')
// and the questionContainer will show - remove .remove('hide')
// 'hide' is a class I've given the html elements and "display: none" them in css.

const header = document.querySelector('#header')
const startButton = document.querySelector('.startButton')
const questionContainer = document.querySelector('#questionsContainer')
const questionsElement = document.querySelector('#container')
const questionsElement1 = document.querySelector('#container1')
const restartContainer = document.querySelector('#resultContainer')

    startButton.addEventListener('click', function (){
        startButton.classList.add('hide');
            header.classList.add('hide');
            questionsElement.classList.remove('hide')
                questionContainer.classList.remove('hide')
    })

// All my questions

const questions = [
    {
        question: 'Hvem vandt EM 2020?',
        answers: [
            { text: 'Frankrig'},
            { text: 'Danmark'},
            { text: 'Italien'},
            { text: 'England'}
        ]
    },
    {
        question: 'Hvem var topscorer under EM 2020?',
        answers: [
            { text: 'Patrik Schick'},
            { text: 'Karim Benzema'},
            { text: 'Christian Eriksen'},
            { text: 'Cristiano Ronaldo'}
        ]
    }
]

// I want to keep score, so you get the result of how many you answered correctly.
// And when the quiz is over I want to display the result

let score = 0;
let clicked = false;

// I now want to display the first question and answer options

function setOptions (question) {
    document.querySelector('#option1').textContent = question.answers[0].text
    document.querySelector('#option2').textContent = question.answers[1].text
    document.querySelector('#option3').textContent = question.answers[2].text
    document.querySelector('#option4').textContent = question.answers[3].text
}
setOptions(questions[0])

function setQuestions (question) {
    document.querySelector('#questionsHeadline').textContent = question.question
}
setQuestions(questions[0])

const answerButton1 = document.querySelector('#option1')
const answerButton2 = document.querySelector('#option2')
const answerButton3 = document.querySelector('#option3')
const answerButton4 = document.querySelector('#option4')

answerButton1.addEventListener('click', function () {
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton2.addEventListener('click', function () {
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton3.addEventListener('click', function () {
    clicked = true
    if (clicked === true) {
        score ++
        console.log(score)
        document.querySelector('#result').textContent = score
    }
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton4.addEventListener('click', function () {
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})

// know I want to display the next question of my quiz using the same curse of action.

function setOptions1 (question) {
    document.querySelector('#option12').textContent = question.answers[0].text
    document.querySelector('#option22').textContent = question.answers[1].text
    document.querySelector('#option32').textContent = question.answers[2].text
    document.querySelector('#option42').textContent = question.answers[3].text
}
setOptions1(questions[1])

function setQuestions1 (question) {
    document.querySelector('#questionsHeadline1').textContent = question.question
}
setQuestions1(questions[1])

const answerButton12 = document.querySelector('#option12')
const answerButton22 = document.querySelector('#option22')
const answerButton32 = document.querySelector('#option32')
const answerButton42 = document.querySelector('#option42')

answerButton12.addEventListener('click', function () {
    clicked = true
    if (clicked === true) {
        score ++
        console.log(score)
        document.querySelector('#result').textContent = score
    }
    questionsElement1.classList.add('hide')
    restartContainer.classList.remove('hide')
})
answerButton22.addEventListener('click', function () {
    questionsElement1.classList.add('hide')
    restartContainer.classList.remove('hide')
})
answerButton32.addEventListener('click', function () {
    questionsElement1.classList.add('hide')
    restartContainer.classList.remove('hide')
})
answerButton42.addEventListener('click', function () {
    clicked = true
    if (clicked === true) {
        score ++
        console.log(score)
        document.querySelector('#result').textContent = score
    }
    questionsElement1.classList.add('hide')
    restartContainer.classList.remove('hide')
})

// If you didn't get any questions correct I want display 0

if (score === 0) {
    document.querySelector('#result').textContent = 0
}





