function solution(k, tangerine) {
    const tangerineSort = new Map()
    tangerine.forEach((val) => {
        tangerineSort.set(val, (tangerineSort.get(val) || 0) + 1)
    })
    
    let count = 0;
    
    const tangerineCount = Array.from(tangerineSort.values()).sort((a,b)=> b-a)
    
    tangerineCount.forEach((val) => {
        if(k <= 0) {
            return;
        }
        
        count++;
        k -= val;
    })
    
    return count
}

