export function isPalindrome(string: string): boolean {
    const str = string.replace(/[\s.,%,:]/g, '').toLowerCase();
    let result = true;
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
};
