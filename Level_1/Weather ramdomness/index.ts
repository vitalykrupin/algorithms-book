export type Temps = {
    n: number;
    temps: number[];
}

export function weatherRandomness({ n, temps }: Temps): number {
	const result = [];
    if(n === 1) return n;
    for(let i = 0; i < n; i++) {
        if((i === 0) && (temps[i] > temps[i+1])) result.push(temps[i]);
        if((i === n - 1) && (temps[i] > temps[i-1])) result.push(temps[i]);
        if((temps[i] > temps[i-1]) && (temps[i] > temps[i+1])) result.push(temps[i]);
    }
    return result.length;
};
