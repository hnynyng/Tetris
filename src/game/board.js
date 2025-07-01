class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = this.createGrid();
    }

    createGrid() {
        return Array.from({ length: this.height }, () => Array(this.width).fill(0));
    }

    draw(ctx) {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                ctx.fillStyle = this.grid[row][col] ? 'blue' : 'white';
                ctx.fillRect(col, row, 1, 1);
                ctx.strokeStyle = 'black';
                ctx.strokeRect(col, row, 1, 1);
            }
        }
    }

    clearLines() {
        for (let row = this.height - 1; row >= 0; row--) {
            if (this.grid[row].every(cell => cell !== 0)) {
                this.grid.splice(row, 1);
                this.grid.unshift(Array(this.width).fill(0));
            }
        }
    }

    checkCollision(tetromino, offset) {
        for (let row = 0; row < tetromino.shape.length; row++) {
            for (let col = 0; col < tetromino.shape[row].length; col++) {
                if (tetromino.shape[row][col] !== 0) {
                    const newX = col + tetromino.x + offset.x;
                    const newY = row + tetromino.y + offset.y;

                    if (newX < 0 || newX >= this.width || newY >= this.height || (newY >= 0 && this.grid[newY][newX] !== 0)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    mergeTetromino(tetromino) {
        for (let row = 0; row < tetromino.shape.length; row++) {
            for (let col = 0; col < tetromino.shape[row].length; col++) {
                if (tetromino.shape[row][col] !== 0) {
                    this.grid[row + tetromino.y][col + tetromino.x] = tetromino.shape[row][col];
                }
            }
        }
    }
}

export default Board;