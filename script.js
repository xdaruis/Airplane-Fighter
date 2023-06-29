// Set your custom board size
const lines = 21, columns = 21;

document.onload = createBoard();

function createBoard() {
    for (let i = 1; i <= lines; ++i) {
        const newBox = document.createElement("div");
        newBox.className = "d-flex justify-content-center";
        document.body.appendChild(newBox);
        for (let j = 1; j <= columns; ++j) {
            const button = document.createElement("button");
            button.id = "" + i + " " + j;
            button.className = "btn btn-warning";
            button.innerHTML = "&nbsp;";
            button.disabled = true;
            newBox.appendChild(button);
        }
    }
}

let rockX = 1;
let rockY = Math.floor(Math.random() * columns) + 1;
let rockId = "" + rockX + " " + rockY;
document.getElementById(rockId).className = "btn btn-danger";

// Set rock falling speed
let rockSpeed = 150;
let rockInterval = window.setInterval(handleRock, rockSpeed);

let scoreValue = 0;

let playerX = lines;
let playerY = Math.floor(columns / 2);
let playerId = "" + playerX + " " + playerY;
document.getElementById(playerId).className = "btn btn-dark";

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

document.onkeydown = movePlayer;

function movePlayer(e) {
    e = e || window.event;
    document.getElementById(playerId).className = "btn btn-warning";
    if (directions[e.keyCode] === 'up' && playerX > 1) {
        playerId = "" + --playerX + " " + playerY;
    } else if (directions[e.keyCode] === 'down' && playerX < lines) {
        playerId = "" + ++playerX + " " + playerY;
    } else if (directions[e.keyCode] === 'left' && playerY > 1) {
        playerId = "" + playerX + " " + --playerY;
    } else if (directions[e.keyCode] === 'right' && playerY < columns) {
        playerId = "" + playerX + " " + ++playerY;
    }
    checkIfPlayerHitRock();
}

function checkIfPlayerHitRock() {
    if (document.getElementById(playerId).className === "btn btn-danger") {
        gameOver();
    } else {
        document.getElementById(playerId).className = "btn btn-dark";
    }
}

function gameOver() {
    const newBox = document.createElement("div");
    newBox.className = "d-flex justify-content-center";
    document.body.appendChild(newBox);
    const gameOverText = document.createElement("h1");
    gameOverText.innerHTML = "GAME OVER";
    newBox.appendChild(gameOverText);
    document.onkeydown = null;
    clearInterval(rockInterval);
}

function handleRock() {
    if (rockX < lines) {
        dropRock();
    } else {
        respawnRock();
    }
}

function checkIfRockHitPlayer() {
    if (document.getElementById("" + (rockX + 1)+ " " + rockY).className === "btn btn-dark" ||
        document.getElementById("" + rockX + " " + rockY).className === "btn btn-dark") {
        gameOver();
    }
}

function dropRock() {
    checkIfRockHitPlayer();
    document.getElementById(rockId).className = "btn btn-warning";
    rockId = "" + ++rockX + " " + rockY;
    document.getElementById(rockId).className = "btn btn-danger";
}

function respawnRock() {
    document.getElementById(rockId).className = "btn btn-warning";
    rockX = 1;
    rockY = Math.floor(Math.random() * columns) + 1;
    rockId = "" + rockX + " " + rockY;
    if (document.getElementById(rockId).className === "btn btn-dark") {
        gameOver();
    } else {
        clearInterval(rockInterval);
        rockInterval = window.setInterval(handleRock, --rockSpeed);
    }
    document.getElementById(rockId).className = "btn btn-danger";
    document.getElementById("scorePoints").innerHTML = "Score: " + ++scoreValue;
}
