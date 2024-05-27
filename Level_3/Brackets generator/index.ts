enum Brackets {
    OPEN = '(',
    CLOSE = ')'
};

export function genBrackets(n: number): string[] {
    let result = [];

    (function generate(buffer: string, open: number, close: number) {
        if(open === 0 && close === 0) {
            result.push(buffer);
            return;
        };
        if(open > 0) generate(buffer + Brackets.OPEN, open - 1, close + 1);
        if(close > 0) generate(buffer + Brackets.CLOSE, open, close - 1);
    })('', n, 0);

    return result;
};
