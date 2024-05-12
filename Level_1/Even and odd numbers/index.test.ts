import { checkParity } from "./index";

describe("checkParity", () => {
    test('should be WIN', () => {
        expect(checkParity([7, 11, 7, -13, 3])).toBe('WIN');
        expect(checkParity([6, -2, 0, 4, 12, 116])).toBe('WIN');
    });
    test('should be FAIL', () => {
        expect(checkParity([1, 2, -3, 6, 4])).toBe('FAIL');
    });
});
