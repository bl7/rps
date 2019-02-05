let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const rand = (Math.floor(Math.random() * 3));
    return choices[rand];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} . You win! `;
    result_div.classList.add('green-glow');
    setTimeout(() =>
        result_div.classList.remove('green-glow'), 300);
}

function loose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} . You loose!`;
    result_div.classList.add('red-glow');
    setTimeout(() =>
        result_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, compChoice) {
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord} . You drew!`;
    result_div.classList.add('gray-glow');
    setTimeout(() =>
        result_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case ("pr"):
        case ("sp"):
            win(userChoice, compChoice);
            break;
        case ("rp"):
        case ("ps"):
        case ("sr"):
            loose(userChoice, compChoice);
            break;
        case ("rr"):
        case ("pp"):
        case ("ss"):
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () =>
        game("r")
    );
    paper_div.addEventListener('click', () =>
        game("p")
    );
    scissors_div.addEventListener('click', () =>
        game("s")
    );
}
main();