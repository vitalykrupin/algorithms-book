import { Node, getOrderedList } from './index';

describe.only('Single linked list', () => {
    const node3 = new Node("node3");
    const node2 = new Node("node2", node3);
    const node1 = new Node("node1", node2);
    const node0 = new Node("node0", node1);

    test('it should return ordered list of nodes', () => {
        expect(getOrderedList(node0)).toEqual(["node0", "node1", "node2", "node3"]);
    });
});
