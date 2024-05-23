import { calc } from './index';

describe.only('Calc Polish notation', () => { 
    it('should return 9', () => {
        expect(calc('2 1 + 3 *')).toBe(9);
    });
    it('should return 38', () => {
        expect(calc('7 2 + 4 * 2 +')).toBe(38);
    });
    it('should return -9', () => {
        expect(calc('-4 -5 +')).toBe(-9);
    });
    it('should return 4', () => {
        expect(calc('4 2 * 4 / 25 * 2 - 12 /')).toBe(4);
    });
});
