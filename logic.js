let players = ['x', 'o'];
let activePlayer = 0;

function startGame() {
    playingField = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    activePlayer = 0;
    renderBoard(playingField);
};

function click(row, col) {
    playingField[row][col] = players[activePlayer];

    renderBoard(playingField);

    let checkWin = true;
    for (let i = 0; i < playingField[row].length; i++) {
        if (playingField[row][i] !== players[activePlayer]) {
            checkWin = false;
        }
    }

    showMessage(checkWin, activePlayer);

    checkWin = true;
    for (let i = 0; i < playingField.length; i++) {
        if (playingField[i][col] !== players[activePlayer]) {
            checkWin = false;
        }
    }

    showMessage(checkWin, activePlayer);

    if (playingField[0][0] == players[activePlayer] &&
        playingField[1][1] == players[activePlayer] &&
        playingField[2][2] == players[activePlayer]
    ) {
        showWinner(activePlayer);
        return false;
    }

    if (playingField[0][2] == players[activePlayer] &&
        playingField[1][1] == players[activePlayer] &&
        playingField[2][0] == players[activePlayer]
    ) {
        showWinner(activePlayer);
        return false;
    }

    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
};

function showMessage(check, player) {
    if (check) {
        showWinner(player);
        return false;
    }
}