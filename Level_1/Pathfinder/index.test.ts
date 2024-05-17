import { findPath } from './index';

describe('Pathfinder', () => {
    test('can not make any move', () => {
        expect(findPath(['.#..', '##.#', '#...', '###.'], 7)).toBe(false);
    });
    test('not enough steps', () => {
        expect(findPath(['....', '.#.#', '#...', '###.'], 5)).toBe(false);
    });
    test('should be true', () => {
        expect(findPath(['....', '.#.#', '#...', '###.'], 9)).toBe(true);
    });
    test('should be true: more steps than we need', () => {
        expect(findPath(['....', '.#.#', '#...', '###.'], 12)).toBe(true);
    });
    test('should work: Array<string[]>', () => {
        expect(findPath([
            ['.','.','.','.'],
            ['.','#','.','#'],
            ['#','.','.','.'],
            ['#','#','#','.']
        ], 9)).toBe(true);
    });
});