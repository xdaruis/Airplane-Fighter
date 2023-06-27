document.onkeydown = movePlayer;

let playerId = "53";

let rock = "0" + Math.floor(Math.random() * 7);
document.getElementById(rock).className = "btn btn-danger";

let rockSpeed = window.setInterval(dropRock, 100);

let scoreValue = 0;
let gameState = true;

function movePlayer(e) {
    e = e || window.event;
    document.getElementById(playerId).className = "btn btn-warning";
    if ((e.keyCode == '38' || e.keyCode == '87') && playerId[0] > 0) { // up
        playerId = --playerId[0] + playerId[1];
    } else if ((e.keyCode == '40' || e.keyCode == '83') && playerId[0] < 5) { // down
        playerId = ++playerId[0] + playerId[1];
    } else if ((e.keyCode == '37' || e.keyCode == '65') && playerId[1] > 0) { // left
        playerId = playerId[0] + --playerId[1];
    } else if ((e.keyCode == '39' || e.keyCode == '68') && playerId[1] < 6) { // right
        playerId = playerId[0] + ++playerId[1];
    }
    if (document.getElementById(playerId).className === "btn btn-danger") {
        gameOver();
    } else {
        document.getElementById(playerId).className = "btn btn-dark";
    }
}

function gameOver() {
    document.getElementById("lostMessage").innerHTML = "GAME OVER";
    gameState = false;
    document.onkeydown = null;
    clearInterval(rockSpeed)
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
        }
        document.getElementById(rock).className = "btn btn-danger";
        document.getElementById("scorePoints").innerHTML = "Score: " + ++scoreValue;
    }
}