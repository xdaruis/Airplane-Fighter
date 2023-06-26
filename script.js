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


document.onkeyup = createRock;
function createRock {
    let rock = "0" + Math.floor(Math.random() * 7);
    document.getElementById(rock).className = "btn btn-danger";
    let i = rock[0];
    setTimeout(() => {
      }, 5000);
    // while (i < 5) {
        // setTimeout("console.log('hi')", 1000);
        // document.getElementById(rock).className = "btn btn-warning";
        // rock = i + rock[1];
        // document.getElementById(rock).className = "btn btn-danger";
        setTimeout(() => {
            document.getElementById(rock).className = "btn btn-warning";
            rock = i + rock[1];
            alert(rock);
            document.getElementById(rock).className = "btn btn-danger";
        }, 10000);
        ++i;
        a
    }
    document.getElementById(rock).className = "btn btn-warning";
}