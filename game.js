const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progresstext = document.getElementById('progresstext');
const scoretext = document.getElementById('score');
const progressbarfull= document.getElementById("progressbarfull");

let currentquestion = {};
let acceptingAnswers = false;
let score = 0;
let counter = 0;
let availablequestions =[];


let questions = [
    {
        question: "Pakistan Super League (PSL) 2020 Trophy was unveiled in which City?",
        choice1: "National Stadium Karachi",
        choice2: "Gaddafi Stadium Lahore",
        choice3: "Sharjah Cricket Stadium",
        choice4: "None of above",
        answer: 1
    },

    {
        question: "Who was the Capton of Lahore Qalandars in PSL 2020?",
        choice1: "Azhar Ali",
        choice2: "AB De Villiers",
        choice3: "Sohail Akhtar",
        choice4: "Brendon McCullum",
        
        answer: 3
    },

    {
        question: "Who was winner of PSL 2021?",
        choice1: "Peshawar Zalmi",
        choice2: "Multan Sultans",
        choice3: "Quetta Gladiators",
        choice4: "Lahore Qalandars",
        
        answer: 2
    },

    {
        question: "Who was the Player of the Series in PSL 2021?",
        choice1: "Sohaib Maqsood",
        choice2: "Babar Azam",
        choice3: "Shaheen Shah Afridi",
        choice4: "Muhammad Rizwan",
        
        answer: 1
    },

    {
        question: "Imran Tahir was Part of which Team?",
        choice1: "Karachi Kings",
        choice2: "Peshawar Zalmi",
        choice3: "Multan Sultans",
        choice4: "Lahore Qalandars",
        
        answer: 3
    },

    {
        question: "Final Match of PSL 6 was Played on ____?",
        choice1: "20th June 2021",
        choice2: "14th June 2021",
        choice3: "28th June 2021",
        choice4: "24th June 2021",
        
        answer: 4
    },

    {
        question: "Luke Ronchi dismissed how many Batsman behind the wickets?",
        choice1: "10",
        choice2: "12",
        choice3: "20",
        choice4: "11",
        
        answer: 4
    },

    {
        question: "Total Number of Matches were Played in PSL 2021?",
        choice1: "30",
        choice2: "32",
        choice3: "33",
        choice4: "34",
        
        answer: 4
    },

    {
        question: "Shahnawaz Dahani has taken how many Wickets in PSL 2021?",
        choice1: "18",
        choice2: "16",
        choice3: "20",
        choice4: "21",
        
        answer: 3
    },

    {
        question: "Who was the Captain of Islamabad Uniteds in 1st PSL?",
        choice1: "Shadab Khan",
        choice2: "Misbah ul Haq",
        choice3: "Rumaan Raees",
        choice4: "Muhammad Sami",
        
        answer: 2
    }
];

const correct_bonus = 1;
const max_questions = 10

startgame = () => {

    counter = 0;
    score = 0;
    availablequestions = [...questions];
    getnew();
};

getnew = () => {
    if (availablequestions.length === 0 || counter >= max_questions) {
        localStorage.setItem('mostrecentscore', score);
        return window.location.assign("result.html");
    }

    counter++;
    
    progresstext.innerText = 'Question ' + counter + '/' + max_questions;
    const x = (counter/max_questions)*100;
    progressbarfull.style.width = x + "%";

    const questionindex = Math.floor(Math.random() * availablequestions.length);
    currentquestion = availablequestions[questionindex];
    question.innerText = currentquestion.question;
    

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentquestion["choice" + number];
    });

    availablequestions.splice(questionindex,1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedchoice = e.target;
        const selectedanswer = selectedchoice.dataset['number'];
        
        const classtoapply  = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect' ;

        if(classtoapply === 'correct')
        {
            incrementscore(correct_bonus);
        }

        selectedchoice.parentElement.classList.add(classtoapply);

        setTimeout(() => {
            selectedchoice.parentElement.classList.remove(classtoapply);
            getnew();
        }, 1000);
    });
});

incrementscore = num => {
    score += num;
    scoretext.innerText = score;
};

startgame();


//                          ----------------------END GAME-----------------------