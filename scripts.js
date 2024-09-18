let homeScore = 0;
let guestScore = 0;

let homeScoreBoard = document.getElementById('home-score');
let guestScoreBoard = document.getElementById('guest-score');

homeScoreBoard.textContent = homeScore;
guestScoreBoard.textContent = guestScore;

function addScoreOne() {
    homeScore += 1;
    homeScoreBoard.textContent = homeScore;
    changeColor();
}
function addScoreTwo() {
    homeScore += 2;
    homeScoreBoard.textContent = homeScore;
    changeColor();
}
function addScoreThree() {
    homeScore += 3;
    homeScoreBoard.textContent = homeScore;
    changeColor();
}

function addScore1() {
    guestScore += 1;
    guestScoreBoard.textContent = guestScore;
    changeColor();
}
function addScore2() {
    guestScore += 2;
    guestScoreBoard.textContent = guestScore;
    changeColor();
}
function addScore3() {
    guestScore += 3;
    guestScoreBoard.textContent = guestScore;
    changeColor();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreBoard.textContent = homeScore;
    guestScoreBoard.textContent = guestScore;
    homeScoreBoard.style.color = '#fff';
    guestScoreBoard.style.color = '#fff';
}
function changeColor() {
    if (homeScore > guestScore) {
        homeScoreBoard.style.color = 'green';
        guestScoreBoard.style.color = 'red';
    } else if (homeScore === guestScore) {
        homeScoreBoard.style.color = 'yellow';
        guestScoreBoard.style.color = 'yellow';
    } else {
        homeScoreBoard.style.color = 'red';
        guestScoreBoard.style.color = 'green';
    }
}
