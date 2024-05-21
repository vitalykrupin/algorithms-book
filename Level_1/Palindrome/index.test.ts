import { isPalindrome } from './index';

describe.only('Palindrome', () => {
    test('should work', () => {
        expect(isPalindrome('a')).toBe(true);
        expect(isPalindrome('ab')).toBe(false);
        expect(isPalindrome('aba')).toBe(true);
        expect(isPalindrome('abba')).toBe(true);
        expect(isPalindrome('abcba')).toBe(true);
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
});