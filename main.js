// When you press start the startButton and header disappears ('hide')
// and the questionContainer will show - remove ('hide')

const header = document.querySelector('#header')
const startButton = document.querySelector('.startButton')
const questionsElement = document.querySelector('#questionsContainer')

    startButton.addEventListener('click', function (){
        startButton.classList.add('hide');
            header.classList.add('hide');
            questionsElement.classList.remove('hide')
    })

// All my questions

const questions = [
    {
        question: 'Hvem vandt EM 2020?',
        answers: [
            { text: 'Frankrig', correct: false },
            { text: 'Danmark', correct: false },
            { text: 'Italien', correct: true },
            { text: 'England', correct: false }
        ]
    },
    {
        question: 'Hvem var topscorer under EM 2020?',
        answers: [
            { text: 'Patrik Schick', correct: true },
            { text: 'Karim Benzema', correct: false },
            { text: 'Christian Eriksen', correct: false },
            { text: 'Cristiano Ronaldo', correct: true }
        ]
    },
    {
        question: 'Hvad blev Danmark-Finland?',
        answers: [
            { text: '4-0', correct: false },
            { text: '1-2', correct: false },
            { text: '1-4', correct: false },
            { text: '0-1', correct: true }
        ]
    },
    {
        question: 'Hvem var Dansk topscorer under EM 2020?',
        answers: [
            { text: 'Kasper Dolberg', correct: true },
            { text: 'Yussuf Poulsen', correct: false },
            { text: 'Mikkel Damsgaard', correct: false },
            { text: 'Joakim Mæhle', correct: false }
        ]
    },
    {
        question: 'Hvor mange mål scorede Danmark under EM 2020?',
        answers: [
            { text: '10', correct: false },
            { text: '11', correct: false },
            { text: '12', correct: true },
            { text: '13', correct: false }
        ]
    },
    {
        question: 'Hvad hedder Danmarks landsholdstræner?',
        answers: [
            { text: 'Peter Schmeichel', correct: false },
            { text: 'Kasper Hjulmand', correct: true },
            { text: 'Nikolaj Jakobsen', correct: false },
            { text: 'Micheal Laudrup', correct: false }
        ]
    },
    {
        question: 'Hvorfor hed det EM 2020, når det blev spillet i 2021?',
        answers: [
            { text: 'Copyright problemer med navnet "EM 2021"', correct: false },
            { text: 'Pest', correct: false },
            { text: 'Bombe trusler fra Rusland', correct: false },
            { text: 'Covid-19', correct: true }
        ]
    },
    {
        question: 'Hvor blev finalen spillet i EM 2020?',
        answers: [
            { text: 'Wembley Stadium', correct: true },
            { text: 'Telia Parken', correct: false },
            { text: 'Stadio Olympico', correct: false },
            { text: 'Stade de France', correct: false }
        ]
    },
    {
        question: 'Hvor mange tacklinger lavede Danmark under EM 2020?',
        answers: [
            { text: '82', correct: false },
            { text: '76', correct: false },
            { text: '88', correct: false },
            { text: '79', correct: true }
        ]
    },
    {
        question: 'Hvow mange kampe spillede Danmark ved EM 2020',
        answers: [
            { text: '6', correct: true },
            { text: '7', correct: false },
            { text: '5', correct: false },
            { text: '4', correct: false }
        ]
    },
    {
        question: 'Hvor mange redninger havde Kasper Schmeichel til EM 2020',
        answers: [
            { text: '15', correct: false },
            { text: '23', correct: false },
            { text: '17', correct: false },
            { text: '18', correct: true }
        ]
    },
    {
        question: 'Hvor mange gule kort fik Italien under EM 2020',
        answers: [
            { text: '12', correct: true },
            { text: '13', correct: false },
            { text: '14', correct: false },
            { text: '15', correct: false }
        ]
    },
    {
        question: 'Hvad var det, Cristiano Ronaldo flyttede fra bordet under et pressemøde?',
        answers: [
            { text: 'En flaske cola', correct: true },
            { text: 'En flaske vand', correct: false },
            { text: 'En bagel', correct: false },
            { text: 'En øl', correct: false }
        ]
    },
    {
        question: 'Hvor mange stadioner har der været spillet på under EM?',
        answers: [
            { text: '9', correct: false },
            { text: '10', correct: false },
            { text: '11', correct: true },
            { text: '12', correct: false }
        ]
    },
    {
        question: 'Hvilken rekord er blevet slået under EM?',
        answers: [
            { text: 'Flest røde kort i en EM-slutrunde', correct: false },
            { text: 'Flest skud på stolpen i en EM-slutrunde', correct: false },
            { text: 'Flest selvmål i en EM-slutrunde', correct: true },
            { text: 'Flest indkast i en EM-slutrunde', correct: false }
        ]
    },
    {
        question: 'Hvem slog de franske verdensmestre ud af tuneringen?',
        answers: [
            { text: 'Tyskland', correct: false },
            { text: 'Spanien', correct: false },
            { text: 'Schweiz', correct: true },
            { text: 'England', correct: false }
        ]
    }
]

// I want to keep score, so you get the result of answered correctly.

let score = 0;

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

answerButton1.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton2.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton3.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'green'
    score++;
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})
answerButton4.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'
    questionsElement.classList.add('hide')
    questionsElement1.classList.remove('hide')
})

// know I want to display the next question of my quiz

const questionsElement1 = document.querySelector('#questionsContainer1')

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

answerButton12.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'green'
    score++;
})
answerButton22.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'
})
answerButton32.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'
})
answerButton42.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'green'
    score++;
})

// when the quiz is over I want to display the result

const result = document.querySelector('#result')






