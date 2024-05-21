import { binarySum } from './index';

describe('Binary system', () => {
    test('should work', () => {
        expect(binarySum(0, 0)).toBe('0');
        expect(binarySum(1, 1)).toBe('10');
        expect(binarySum(10, 11)).toBe('101');
        expect(binarySum(1010, 1011)).toBe('10101');
    });
});
