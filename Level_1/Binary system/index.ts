export function binarySum(n1: number, n2: number): string {
    let result = '';
    let carry = 0;
    const first = n1.toString();
    const second = n2.toString();
    for(let i = 0; i < Math.max(first.length, second.length); ++i) {
        const a = first[first.length - 1 - i] ?? 0;
        const b = second[second.length - 1 - i] ?? 0;
        const t =  carry + Number(a) + Number(b);
        carry = t >> 1;
        result = (t & 1) + result;
    }
    if(carry) result = carry + result;
    return result;
};
