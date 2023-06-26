document.onkeydown = checkKey;
let playerId = "53";

function checkKey(e) {
    e = e || window.event;
    if ((e.keyCode == '38' || e.keyCode == '87') && playerId[0] > 0) { //up
        document.getElementById(playerId).className = "btn btn-warning";
        playerId = --playerId[0] + playerId[1];
        document.getElementById(playerId).className = "btn btn-dark";
    } else if ((e.keyCode == '40' || e.keyCode == '83') && playerId[0] < 5) { //down
        document.getElementById(playerId).className = "btn btn-warning";
        playerId = ++playerId[0] + playerId[1];
        document.getElementById(playerId).className = "btn btn-dark";
    } else if ((e.keyCode == '37' || e.keyCode == '65') && playerId[1] > 0) { // left
        document.getElementById(playerId).className = "btn btn-warning";
        playerId = playerId[0] + --playerId[1];
        document.getElementById(playerId).className = "btn btn-dark";
    } else if ((e.keyCode == '39' || e.keyCode == '68') && playerId[1] < 6) { // right
        document.getElementById(playerId).className = "btn btn-warning";
        playerId = playerId[0] + ++playerId[1];
        document.getElementById(playerId).className = "btn btn-dark";
    }
}

// let rock = "0" + Math.floor(Math.random() * 7);
// alert(rock);


// setInterval(createRock, 1000);

document.onclick = createRock;

function moveRock(rock) {
    document.getElementById(rock).className = "btn btn-warning";
    if (rock[0] < 5) {
        rock = ++rock[0] + rock[1];
        alert(rock);
        document.getElementById(rock).className = "btn btn-danger";
        // setTimeout(moveRock(rock), 3000);
    } else {
        clearInterval(interval);
    }
}

function createRock {
    let rock = "0" + Math.floor(Math.random() * 7);
    document.getElementById(rock).className = "btn btn-danger";
    let interval = setInterval(moveRock(), 100, rock);
}