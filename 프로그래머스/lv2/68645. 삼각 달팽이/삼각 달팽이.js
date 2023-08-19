function solution(n) {
    const answer = Array.from({ length: n }, (_, i) => Array(i).fill(0));
    
    let num = 1;

    let x = -1, y = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            
            if (i % 3 === 0) {
                x++;
            }

            else if (i % 3 === 1) {
                y++;
            }

            else if (i % 3 === 2) {
                x--;
                y--;
            }
           
            answer[x][y] = num++;
        }
    }

    const result = [];
    answer.forEach(row => result.push(...row));
    return result;
}