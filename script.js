let playerId = "53";

let rock = "0" + Math.floor(Math.random() * 7);
document.getElementById(rock).className = "btn btn-danger";

let rockSpeed = 150;
let rockInterval = window.setInterval(dropRock, rockSpeed);

let scoreValue = 0;

const directions = {
    '38': 'up',
    '87': 'up',
    '40': 'down',
    '83': 'down',
    '37': 'left',
    '65': 'left',
    '39': 'right',
    '68': 'right'
};

const lines = 5, columns = 6;
document.onkeydown = movePlayer;

function movePlayer(e) {
    e = e || window.event;
    document.getElementById(playerId).className = "btn btn-warning";
    if (directions[e.keyCode] === 'up' && playerId[0] > 0) {
        playerId = --playerId[0] + playerId[1];
    } else if (directions[e.keyCode] === 'down' && playerId[0] < lines) {
        playerId = ++playerId[0] + playerId[1];
    } else if (directions[e.keyCode] === 'left' && playerId[1] > 0) {
        playerId = playerId[0] + --playerId[1];
    } else if (directions[e.keyCode] === 'right' && playerId[1] < columns) {
        playerId = playerId[0] + ++playerId[1];
    }
    checkIfPlaneHitRock();
}

function checkIfPlaneHitRock() {
    if (document.getElementById(playerId).className === "btn btn-danger") {
        gameOver();
    } else {
        document.getElementById(playerId).className = "btn btn-dark";
    }
}

function gameOver() {
    document.getElementById("lostMessage").innerHTML = "GAME OVER";
    document.onkeydown = null;
    clearInterval(rockInterval);
}

function checkIfRockHit() {
    if (document.getElementById(++rock[0] + rock[1]).className === "btn btn-dark" ||
        document.getElementById(rock[0] + rock[1]).className === "btn btn-dark") {
        gameOver();
    }
}

function dropRock() {
    if (rock[0] < 5) {
        checkIfRockHit();
        rock = ++rock[0] + rock[1];
        document.getElementById(rock).className = "btn btn-danger";
        if (document.getElementById(--rock[0] + rock[1]).className === "btn btn-danger") {
            document.getElementById(--rock[0] + rock[1]).className = "btn btn-warning";
        }
    } else {
        document.getElementById(rock).className = "btn btn-warning";
        rock = "0" + Math.floor(Math.random() * 7);
        if (document.getElementById(rock).className === "btn btn-dark") {
            gameOver();
        } else {
            clearInterval(rockInterval);
            rockInterval = window.setInterval(dropRock, --rockSpeed);
        }
        document.getElementById(rock).className = "btn btn-danger";
        document.getElementById("scorePoints").innerHTML = "Score: " + ++scoreValue;
    }
}