// * DATA'S
const playerComp = ['Player : ', 'Computer : '];
const choices = ['Rock', 'Paper', 'Scissors'];

// ? Player & Comp Choice
let playCho = document.getElementById('player');
let compCho = document.getElementById('computer');

// ? ROCK BUTTON FUNCTION
function batu() {
    // ? player
    let res = document.getElementById('resValue');
    let player = document.getElementById('rock');
    player = `${choices[0]}`;

    // ? comp
    let comp = Math.random();

    if (comp < 0.34) {
        comp = `${choices[0]}`;
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = `${choices[1]}`;
    } else {
        comp = `${choices[2]}`;
    }

    // ! Rules
    if (player == comp) {
        playCho.innerHTML = `${playerComp[0]} ${choices[0]}`;
        compCho.innerHTML = `${playerComp[1]} ${choices[0]}`;
        res.innerHTML = 'DRAW';
    } else if (comp == `${choices[1]}`) {
        if (player !== comp) {
            playCho.innerHTML = `${playerComp[0]} ${choices[0]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[1]}`;
            res.innerHTML = 'PLAYER LOSE';
        }
    } else {
        if (comp == `${choices[2]}`) {
            playCho.innerHTML = `${playerComp[0]} ${choices[0]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[2]}`;
            res.innerHTML = 'PLAYER WIN';
        }
    }
}

// ? PAPER BUTTON FUNCTION
function kertas() {
    // ? player
    let res = document.getElementById('resValue');
    let player = document.getElementById('paper');
    player = `${choices[1]}`;

    // ? comp
    let comp = Math.random();

    if (comp < 0.34) {
        comp = `${choices[0]}`;
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = `${choices[1]}`;
    } else {
        comp = `${choices[2]}`;
    }

    // ! Rules
    if (player == comp) {
        playCho.innerHTML = `${playerComp[0]} ${choices[1]}`;
        compCho.innerHTML = `${playerComp[1]} ${choices[1]}`;
        res.innerHTML = 'DRAW';
    } else if (comp == `${choices[0]}`) {
        if (player !== comp) {
            playCho.innerHTML = `${playerComp[0]} ${choices[1]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[0]}`;
            res.innerHTML = 'PLAYER WIN';
        }
    } else {
        if (comp == `${choices[2]}`) {
            playCho.innerHTML = `${playerComp[0]} ${choices[1]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[2]}`;
            res.innerHTML = 'PLAYER LOSE';
        }
    }
}

// ? SCISSORS BUTTON FUNCTION
function gunting() {
    // ? player
    let res = document.getElementById('resValue');
    let player = document.getElementById('scissor');
    player = `${choices[2]}`;

    // ? comp
    let comp = Math.random();

    if (comp < 0.34) {
        comp = `${choices[0]}`;
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = `${choices[1]}`;
    } else {
        comp = `${choices[2]}`;
    }

    // ! Rules
    if (player == comp) {
        playCho.innerHTML = `${playerComp[0]} ${choices[2]}`;
        compCho.innerHTML = `${playerComp[1]} ${choices[2]}`;
        res.innerHTML = 'DRAW';
    } else if (comp == `${choices[1]}`) {
        if (player !== comp) {
            playCho.innerHTML = `${playerComp[0]} ${choices[2]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[1]}`;
            res.innerHTML = 'PLAYER WIN';
        }
    } else {
        if (comp == `${choices[0]}`) {
            playCho.innerHTML = `${playerComp[0]} ${choices[2]}`;
            compCho.innerHTML = `${playerComp[1]} ${choices[0]}`;
            res.innerHTML = 'PLAYER LOSE';
        }
    }
}
