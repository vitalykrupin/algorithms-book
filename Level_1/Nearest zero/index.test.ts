import { nearestZero } from './index';

describe('Nearest zero', () => {
    test('should work', () => {
        expect(nearestZero(5, [0, 1, 4, 9, 0])).toBe('0 1 2 1 0');
        expect(nearestZero(6, [0, 7, 9, 4, 8, 20])).toBe('0 1 2 3 4 5');
        expect(nearestZero(12, [99, 0, 100, 72, 43, 49, 0, 51, 19, 61, 93, 31])).toBe('1 0 1 2 2 1 0 1 2 3 4 5');
    });
});
