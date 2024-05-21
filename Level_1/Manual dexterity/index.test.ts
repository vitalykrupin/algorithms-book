import { checkMatches } from './index';

describe('Manual dexterity', () => {
    test('checkMatches', () => {
        expect(checkMatches(3, ['1231', '2..2', '2..2', '2..2'])).toBe(2);
        expect(checkMatches(4, ['1111', '9999', '1111', '9911'])).toBe(1);
        expect(checkMatches(4, ['1111', '1111', '1111', '1111'])).toBe(0);
    });
});
