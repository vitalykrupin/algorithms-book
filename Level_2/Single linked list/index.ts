export class Node {
    value: string;
    next: Node;
    constructor(value: string = null, next: Node = null) {
      this.value = value;
      this.next = next;
    };
};

export function getOrderedList(head: Node): string[] {
    const result: string[] = [];
    let current: Node = head;
    while(current) {
        result.push(current.value);
        current = current.next;
    };
    return result;
};
