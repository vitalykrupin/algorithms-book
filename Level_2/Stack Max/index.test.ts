import { stackMax } from './index'

describe('Stack Max', () => {
    test('should work', () => {
        expect(stackMax(8, [
            'get_max',
            'push 7',
            'pop',
            'push -2',
            'push -1',
            'pop',
            'get_max',
            'get_max'
        ])).toEqual(['None', -2, -2]);
    });
    test('should work', () => {
        expect(stackMax(8, [
            'push 1',
            'push 2',
            'push 3',
            'get_max',
            'pop',
            'get_max',
            'pop',
            'get_max'
        ])).toEqual([3, 2, 1]);
    });
    test('should work', () => {
        expect(stackMax(7, [
            'get_max',
            'pop',
            'pop',
            'pop',
            'push 10',
            'get_max',
            'push -9'
        ])).toEqual(['None', 'error', 'error', 'error', 10]);
    });
});
