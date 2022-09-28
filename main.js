const header = document.querySelector('#header')
const startButton = document.querySelector('.startButton')

















































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