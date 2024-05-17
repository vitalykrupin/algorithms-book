const STOP_SYMBOL = '#';

enum DIRECTION {
    'RIGHT',
    'LEFT',
    'UP',
    'DOWN'
};
export type Matrix = Array<string[]> | Array<string>;
export function findPath(matrix: Matrix, steps: number): boolean {
    const finish: [row: number, col: number] = [matrix.length - 1, matrix[0].length - 1];
    let row: number = 0;
    let col: number = 0;
    let prevMove: DIRECTION;

    const moveRight = () => (col++, prevMove = DIRECTION.RIGHT);
    const moveLeft = () => (col--, prevMove = DIRECTION.LEFT);
    const moveDown = () => (row++, prevMove = DIRECTION.DOWN);
    const moveUp = () => (row--, prevMove = DIRECTION.UP);

    for(let i = 0; i < steps; i++) {
        if(row === finish[0] && col === finish[1]) return true;
        if(col !== matrix[row].length - 1 && matrix[row][col + 1] !== STOP_SYMBOL) {
            if(prevMove !== DIRECTION.LEFT) {
                moveRight();
                continue;
            };
        };
        if(row !== matrix.length - 1 && matrix[row + 1][col] !== STOP_SYMBOL) {
            if(prevMove !== DIRECTION.UP) {
                moveDown();
                continue;
            };
        };
        if(col !== 0 && matrix[row][col - 1] !== STOP_SYMBOL) {
                moveLeft();
                continue;
        };
        if(col !== 0 && matrix[row - 1] !== STOP_SYMBOL) {
                moveUp();
                continue;
        };
        return false;
    };
    return false;
};
