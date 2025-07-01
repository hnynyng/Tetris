class Tetromino {
    constructor(shape) {
        this.shape = shape;
        this.position = { x: 0, y: 0 };
    }

    rotate() {
        // Logic to rotate the tetromino shape
        this.shape = this.shape[0].map((val, index) =>
            this.shape.map(row => row[index]).reverse()
        );
    }

    move(direction) {
        if (direction === 'left') {
            this.position.x -= 1;
        } else if (direction === 'right') {
            this.position.x += 1;
        } else if (direction === 'down') {
            this.position.y += 1;
        }
    }

    getShape() {
        return this.shape;
    }

    getPosition() {
        return this.position;
    }
}

export default Tetromino;