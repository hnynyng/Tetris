const Board = require('./game/board');
const Tetromino = require('./game/tetromino');
const { drawBoard, clearLines } = require('./game/utils');

const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

let board = new Board();
let currentTetromino = new Tetromino();

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard(context, board);
    currentTetromino.draw(context);
}

function update() {
    if (board.canMove(currentTetromino, 0, 1)) {
        currentTetromino.move(0, 1);
    } else {
        board.addTetromino(currentTetromino);
        clearLines(board);
        currentTetromino = new Tetromino();
        if (!board.canMove(currentTetromino, 0, 0)) {
            alert('Game Over');
            resetGame();
        }
    }
}

function resetGame() {
    board = new Board();
    currentTetromino = new Tetromino();
}

function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            if (board.canMove(currentTetromino, -1, 0)) {
                currentTetromino.move(-1, 0);
            }
            break;
        case 'ArrowRight':
            if (board.canMove(currentTetromino, 1, 0)) {
                currentTetromino.move(1, 0);
            }
            break;
        case 'ArrowDown':
            if (board.canMove(currentTetromino, 0, 1)) {
                currentTetromino.move(0, 1);
            }
            break;
        case 'ArrowUp':
            currentTetromino.rotate();
            break;
    }
});

gameLoop();