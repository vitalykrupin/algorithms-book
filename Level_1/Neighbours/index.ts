type Matrix = {
    matrix: number[][];
    elCoords: number[];
};
export function getNeighbours(obj: Matrix): number[] {
	const result = [];
    const rowId = obj.elCoords[0];
    const colId = obj.elCoords[1];
    const matrix = obj.matrix;
    if(matrix[rowId - 1]) result.push(matrix[rowId - 1][colId]);
    if(matrix[rowId + 1]) result.push(matrix[rowId + 1][colId]);
    if(matrix[rowId][colId - 1]) result.push(matrix[rowId][colId - 1]);
    if(matrix[rowId][colId + 1]) result.push(matrix[rowId][colId + 1]);
    return result.sort((a, b) => a > b? 1 : a < b? -1 : 0);
}
