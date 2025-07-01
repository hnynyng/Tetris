export function getRandomTetromino() {
    const tetrominoes = [
        [[1, 1, 1, 1]], // I
        [[1, 1], [1, 1]], // O
        [[0, 1, 0], [1, 1, 1]], // T
        [[0, 1, 1], [1, 1, 0]], // S
        [[1, 1, 0], [0, 1, 1]], // Z
        [[1, 0, 0], [1, 1, 1]], // L
        [[0, 0, 1], [1, 1, 1]], // J
    ];
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    return tetrominoes[randomIndex];
}

export function checkForFilledLines(board) {
    const filledLines = [];
    for (let row = 0; row < board.length; row++) {
        if (board[row].every(cell => cell !== 0)) {
            filledLines.push(row);
        }
    }
    return filledLines;
}

export function removeFilledLines(board, filledLines) {
    for (let row of filledLines) {
        board.splice(row, 1);
        board.unshift(Array(board[0].length).fill(0));
    }
}