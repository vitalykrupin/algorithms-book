import { evaluateFunction } from './index';

describe('Function values', () => {
    test('should work', () => {
        expect(evaluateFunction(-8, -5, -2, 7)).toBe(-183);
        expect(evaluateFunction(0, 0, 0, 0)).toBe(0);
        expect(evaluateFunction(8, 2, 9, -10)).toBe(40);
    });
});
