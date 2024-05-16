import { weatherRandomness } from './index';

describe('Weather randomness', () => {
    test('should work', () => {
        expect(weatherRandomness({n: 7, temps:[-1, -10, -8, 0, 2, 0, 5]})).toBe(3);
    });
    test('should work', () => {
        expect(weatherRandomness({n: 5, temps:[1, 2, 5, 4, 8]})).toBe(2);
    });
    test('should work', () => {
        expect(weatherRandomness({n: 1, temps:[5]})).toBe(1);
    });
    test('should work', () => {
        expect(weatherRandomness({n: 10, temps:[-159, -248, 8, -23, -45, -131, -169, -184, 159, -241]})).toBe(3);
    });
});
