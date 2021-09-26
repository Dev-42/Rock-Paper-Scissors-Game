let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result = document.getElementById("resultMsg");

let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");


function computerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function wins(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let smallUserWord = "User".fontsize(3).sub();
    let compUserWord = "Computer".fontsize(3).sub();
    result.innerHTML = `${userChoice}${smallUserWord} beats ${compChoice}${compUserWord}.You win!!!`;
    document.getElementById(userChoice).classList.add("green");
}

function loses(userChoice, compChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    let smallUserWord = "User".fontsize(3).sub();
    let compUserWord = "Computer".fontsize(3).sub();
    result.innerHTML = `${compChoice}${compUserWord} beats ${userChoice}${smallUserWord}.Computer Wins!!!`;
    document.getElementById(userChoice).classList.add("red");
}

function draw(userChoice, compChoice) {
    result.innerHTML = "Computer Choice and User Choice are same.Game Draw!!! ";
    document.getElementById(userChoice).classList.add("yellow");
}

function game(userChoice) {
    let compChoice = computerChoice();
    console.log(compChoice);
    let res = userChoice + compChoice;
    if (res == "RockScissors" || res == "PaperRock" || res == "ScissorsPaper") {
        wins(userChoice, compChoice);
    } else if (res == "ScissorsRock" || res == "RockPaper" || res == "PaperScissors") {
        loses(userChoice, compChoice);
    } else if (res == "RockRock" || res == "ScissorsScissors" || res == "PaperPaper") {
        draw(userChoice, compChoice);
    }

}
main();

function main() {
    rock_div.addEventListener("click", function() {
        game("Rock");
    });
    paper_div.addEventListener("click", function() {
        game("Paper");
    });
    scissors_div.addEventListener("click", function() {
        game("Scissors");
    });
}