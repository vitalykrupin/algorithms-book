import { deck } from './index';

describe('Deck', () => {
    test('should work', () => {
        expect(deck(4, [
            'push_front 861',
            'push_front -819',
            'pop_back',
            'pop_back'
        ])).toEqual([861, -819]);
    });
    test('should work', () => {
        expect(deck(6, [
            'push_front -201',
            'push_back 959',
            'push_back 102',
            'push_front 20',
            'pop_front',
            'pop_back',
        ])).toEqual([20, 102]);
    });
    test('should work', () => {
        expect(deck(7, [
            'pop_front',
            'pop_front',
            'push_front 741',
            'push_front 648',
            'pop_front',
            'pop_back',
            'pop_front'
        ])).toEqual(['error', 'error', 648, 741, 'error']);
    });
});