import { genBrackets } from './index';

describe('Brackets generator', () => {
    it('should generate brackets', () => {
        expect(genBrackets(1)).toEqual(['()']);
        expect(genBrackets(2)).toEqual(['(())', '()()']);
        expect(genBrackets(3)).toEqual([
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()'
        ]);
    });
});
