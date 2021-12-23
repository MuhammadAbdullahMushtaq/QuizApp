function showInst(){
    location.href = "instruction.html" 
}

function showIndex(){
    location.href = "index.html"
}

function startQuiz(){
    location.href = "quiz.html"
}
const finalscore = document.getElementById('finalscore');
const mostrecentscore = localStorage.getItem('mostrecentscore');

finalscore.innerText = mostrecentscore;