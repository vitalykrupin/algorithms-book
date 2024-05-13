import { getNeighbours } from './index';

describe('Neighbors', () => {
    test('should work', () => {
        expect(getNeighbours({
            matrix: [
                [1, 2, 3],
                [0, 2, 6],
                [7, 4, 1],
                [2, 7, 0]
            ],
            elCoords: [3, 0]
        })).toEqual([7, 7]);
    });
    test('should work', () => {
        expect(getNeighbours({
            matrix: [
                [1, 2, 3],
                [0, 2, 6],
                [7, 4, 1],
                [2, 7, 0]
            ],
            elCoords: [0, 0]
        })).toEqual([0, 2]);
    });
    test('should work', () => {
        expect(getNeighbours({
            matrix: [
                [-3, 8],
            ],
            elCoords: [0, 0]
        })).toEqual([8]);
    });
});
