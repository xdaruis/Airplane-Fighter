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

// function moveRock(rock) {
//     document.getElementById(rock).className = "btn btn-warning";
//     if (rock[0] < 5) {
//         rock = ++rock[0] + rock[1];
//         alert(rock);
//         document.getElementById(rock).className = "btn btn-danger";
//         // setTimeout(moveRock(rock), 3000);
//     } else {
//         clearInterval(interval);
//     }
// }

let rock = "0" + Math.floor(Math.random() * 7);

function moveRock() {
    document.getElementById(rock).className = "btn btn-danger";
    if (rock[0] < 5) {
        document.getElementById(rock).className = "btn btn-warning";
        rock = ++rock[0] + rock[1];
        document.getElementById(rock).className = "btn btn-danger";
    } else {
        document.getElementById(rock).className = "btn btn-warning";
        rock = "0" + Math.floor(Math.random() * 7);
        document.getElementById(rock).className = "btn btn-danger";

    }
}

let intervalID = window.setInterval(moveRock, 1000);

// function myCallback() {
//  // Your code here
// }


// sleep(500).then(() => {
//     // Do something after the sleep!
//     rock = ++rock[0] + rock[1];
// });

// function sleep(time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
  
  // Usage!


// const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// async function repeatedGreetingsLoop() {
//   for (let i = 1; i <= 5; i++) {
//     await sleepNow(1000)
//     console.log(`Hello #${i}`)
//   }
// }

// repeatedGreetingsLoop()