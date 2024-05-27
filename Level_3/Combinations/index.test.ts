import { getCombinations } from './index';

describe('Combinations', () => {
    it('should return all combinations', () => {
        expect(getCombinations('23'))
            .toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
        expect(getCombinations('92'))
            .toEqual(['wa', 'wb', 'wc', 'xa', 'xb', 'xc', 'ya', 'yb', 'yc', 'za', 'zb', 'zc']);
    });
});
