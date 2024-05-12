export function checkParity(numbers: number[]): 'WIN' | 'FAIL' {
    let result: 'WIN' | 'FAIL' = 'WIN';
    let flag: number;
    for(let i = 0; i < numbers.length; i++) {
        if(i === 0) {
            flag = Math.abs(numbers[i]) & 1;
            continue;
        }
        if((Math.abs(numbers[i]) & 1) !== flag) {
            result = 'FAIL';
            break;
        }
    }
    return result;
};
