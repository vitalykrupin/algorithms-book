import { getLongestWord } from './index';

describe.only('Longest word', () => {
    test('should work', () => {
        expect(getLongestWord('i love segment tree')).toBe('segment');
    });
    test('should work', () => {
        expect(getLongestWord('i')).toBe('i');
    });
    test('should work', () => {
        expect(getLongestWord('frog jumps from river')).toBe('jumps');
    });
});
