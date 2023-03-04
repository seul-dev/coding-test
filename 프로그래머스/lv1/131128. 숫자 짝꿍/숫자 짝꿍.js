function solution(X, Y) {
    const xNumbers = {}
    const sameNumbers = []
    
    for(const x of X) {
        xNumbers[x] = (xNumbers[x] || 0) +  1 
    }
    
    for(const y of Y) {
        if(xNumbers[y] > 0) {
            sameNumbers.push(y)
            xNumbers[y]--
        }
    }
    
    const mates = sameNumbers.sort((a,b) => b-a).join('')
    
    if(mates.length === 0) {
        return '-1'
    } 
    if(mates[0]=== '0') {
        return '0'
    }
    
    return mates
}