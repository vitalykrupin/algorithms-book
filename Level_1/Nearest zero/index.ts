export function nearestZero(length: number, numbers: number[]): string {
    const result = new Array(length).fill(0);
  	let lastZero = -length;
  	for(const el of rangeToZero(length)) {
    	if(numbers[el]) result[el] = el - lastZero;
        else lastZero = el;
  	}
    lastZero = length * Infinity;
  	for(const el of rangeToZero(length).reverse()) {
    	if(numbers[el]) result[el] = Math.min(lastZero - el, result[el]);
        else lastZero = el;
  	}
    return result.join(' ');
};

function rangeToZero(num: number): number[] {
	return [...Array(num).keys()];
};
