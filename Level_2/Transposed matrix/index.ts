export function transposeMatrix(rows:number, cols: number, matrix: Array<number[]>): Array<number[]> {
    const result = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
           result[j][i] = matrix[i][j];
        }
    }
    return result;
};
