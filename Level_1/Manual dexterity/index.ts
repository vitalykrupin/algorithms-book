const PLAYERS = 2;

export function checkMatches(maxKeysPerPlayer: number, matrix: string[]): number {
    const numbers = matrix.map(el => el.split('').map(Number)).flat();
    const maxKeys = maxKeysPerPlayer * PLAYERS;
    let score = 0;
    const keysDict = {};
    for(let i = 0; i < numbers.length; i++) {
    	if (keysDict[numbers[i]]) ++keysDict[numbers[i]];
    	else keysDict[numbers[i]] = 1;
    }
    for(let i = 1; i <= 9; i++) {
    	if(!keysDict[i] || (keysDict[i] > maxKeys)) continue;
    	score++;
  	}
    
    return score;
};
