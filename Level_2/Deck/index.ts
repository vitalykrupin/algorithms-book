enum SERVICE_NAME {
    'PLUS' = '+',
    'MINUS' = '-',
    'ERROR' = 'error'
};

enum SIDE {
    'TAIL' = 'tail',
    'HEAD' = 'head'
}

class Deck {
    max: number;
    deck: Array<number>;
    tail: number = 0;
    head: number = 0;
    size: number = 0;
    constructor(max: number) {
        this.max = max;
        this.deck = new Array(max).fill(null);
    }

    public pushBack(x: number) {
        if(this._isFull()) return SERVICE_NAME.ERROR;
        this._pointerMove(SIDE.TAIL, SERVICE_NAME.PLUS);
        this.deck[this.tail] = x;
        this.size += 1;
    };

    public pushFront(x: number) {
        if(this._isFull()) return SERVICE_NAME.ERROR;
        this._pointerMove(SIDE.HEAD, SERVICE_NAME.MINUS);
        this.deck[this.head] = x;
        this.size += 1;
    };

    public popBack() {
        if(this._isEmpty()) return SERVICE_NAME.ERROR;
        const x = this.deck[this.tail];
        this.deck[this.tail] = null;
        this.size -= 1;
        this._pointerMove(SIDE.TAIL, SERVICE_NAME.MINUS);
        return x;
    };

    public popFront() {
        if(this._isEmpty()) return SERVICE_NAME.ERROR;
        const x = this.deck[this.head];
        this.deck[this.head] = null;
        this.size -= 1;
        this._pointerMove(SIDE.HEAD, SERVICE_NAME.PLUS);
        return x;
    };

    private _isEmpty() {
        return this.size === 0;
    };

    private _isFull() {
        return this.size === this.max;
    }

    private _pointerMove(side: SIDE, value: SERVICE_NAME) {
        if(this._isEmpty()) return;
        value === SERVICE_NAME.PLUS
            ? this[side] === this.max - 1
                ? this[side] = 0
                : this[side] += 1
            : this[side] === 0
                ? this[side] = this.max - 1
                : this[side] -= 1
    };
};

export function deck(max: number, commands: Array<string>) {
    const deck = new Deck(max);
    const result = [];
    const dict = {
        push_back: 'pushBack',
        push_front: 'pushFront',
        pop_back: 'popBack',
        pop_front: 'popFront'
    };
    commands.forEach(c => {
        const [ command, value ] = c.split(' ');
        const r = value
            ? deck[dict[command]](Number(value))
            : deck[dict[command]]();
        if(r) result.push(r);
    });
    return result;
};
