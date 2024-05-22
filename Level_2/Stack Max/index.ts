export class Stack {
    stack: number[];
    constructor() {
      this.stack = [];
    }
    push(x: number) {
      this.stack.push(Number(x));
    };
    pop() {
      if(!this.stack.length) return 'error';
      this.stack.pop();
    };
    get_max() {
      if(!this.stack.length) return 'None';
      return Math.max(...this.stack);
    };
};

export function stackMax(n: number, commands: string[]) {
	const stack = new Stack();
	const result = [];
    const dict = {
        'push': (x: number) => stack.push(x),
        'pop': () => stack.pop(),
        'get_max': () => stack.get_max()
    };

    for(let i = 0; i < n; i++) {
        const [ command, value ] = commands[i].split(' ');
        if(value) {
            dict[command](Number(value));
        } else {
            const res = dict[command]();
            res? result.push(res) : undefined;
        }
    }
	return result;
};
