function solution(park, routes) {
    const dir = {
        'S': [1,0],
        'N':[-1,0],
        'W': [0,-1],
        'E':[0,1]
    }
    
    const maxRow = park.length -1;
    const maxCol = park[0].length -1;
    
    function findStartingPosition() {
        for (let i = 0; i <= maxRow; i++) {
            for (let j = 0; j <= maxCol; j++) {
                if (park[i][j] === 'S') {
                    return [i, j];
                }
            }
        }
    }

    let [row, col] = findStartingPosition();
    
    
    for(const route of routes) {
        const [op, n] = route.split(' ')
        const [dr, dc] = dir[op]
        const step = parseInt(n)
        
        let tempRow = row; 
        let tempCol = col;
        
        let flag = true
        
        for (let i = 0; i < step; i++) {
            tempRow += dr;
            tempCol += dc;

            if (tempRow <0 || tempRow > maxRow || tempCol < 0 || tempCol > maxCol || park[tempRow][tempCol] === 'X') {
                
                flag = false
            } 
        }
        
        if(flag) {
            row = tempRow;
            col = tempCol;
        }
    }
    
    return [row, col]
}


