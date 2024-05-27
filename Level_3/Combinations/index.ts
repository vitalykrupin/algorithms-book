const NUMS_ALPHABET = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

export function getCombinations(digits: string): string[] {
    let result: string[] = [];

    (function combine(digits, buffer) {
        if(digits.length === buffer.length) {
            result.push(buffer);
            return;
        }
        for(const letter of NUMS_ALPHABET[digits[buffer.length]]) {
            buffer += letter;
            combine(digits, buffer);
            buffer = buffer.slice(0, -1);
        }
        return result;
    })(digits, '');

    return result;
};
