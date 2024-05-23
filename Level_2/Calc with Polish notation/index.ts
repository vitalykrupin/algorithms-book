const ERROR_MSG = 'There are not enough numbers to perform the operation';
enum OPERATOR {
    'PLUS' = '+',
    'MINUS' = '-',
    'MULTIPLE' = '*',
    'DIVIDE' = '/',
};

class Stack {
    items: number[];
    constructor() {
        this.items = [];
    };
    public push(item: number): void {
        this.items.push(item);
    };
    public pop(): number {
        return this.items.pop();
    };
    public peek(): number {
        return this.items[this.items.length - 1];
    };
    public size(): number {
        return this.items.length;
    };
};

export function calc(str: string) {
    const items = str.trim().split(' ');
    const numbers = new Stack();
    const operatorsDict: Record<OPERATOR, (x: number, y: number) => number> = {
        [OPERATOR.PLUS]: (x, y) => x + y,
        [OPERATOR.MINUS]: (x, y) => x - y,
        [OPERATOR.MULTIPLE]: (x, y) => x * y,
        [OPERATOR.DIVIDE]: (x, y) => Math.floor(x / y)
    };
    for(let item of items) {
        const num = Number(item);
        if(!isNaN(num)) {
            numbers.push(num);
        } else {
            if(numbers.size() < 2) {
                throw new Error(ERROR_MSG);
            } else {
                const y = numbers.pop();
                const x = numbers.pop();
                numbers.push(operatorsDict[item](x, y));
            };
        };
    };
    return numbers.peek();
};
