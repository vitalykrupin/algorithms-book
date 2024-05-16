export function getLongestWord(str: string): string {
    const words = str.split(' ');
    let result = '';
    words.forEach(word => {
        if(word.length > result.length) result = word;
    });
    return result;
};
