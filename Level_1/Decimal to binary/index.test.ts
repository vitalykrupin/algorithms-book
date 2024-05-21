import { toBinary } from './index';

describe('toBinary', () => {    
    test('should work', () => {
        expect(toBinary(0)).toBe('0');
        expect(toBinary(1)).toBe('1');
        expect(toBinary(2)).toBe('10');
        expect(toBinary(3)).toBe('11');
        expect(toBinary(4)).toBe('100');
        expect(toBinary(5)).toBe('101');
    });
});
