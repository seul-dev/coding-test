function solution(k, tangerine) {
    const tangerineSort = new Map()
    tangerine.forEach((val) => {
        tangerineSort.set(val, (tangerineSort.get(val) || 0) + 1)
    })
    
    let count = 0;
    
    const tangerineCount = Array.from(tangerineSort.values()).sort((a,b)=> b-a)
    
    while (k > 0) {
        k -= tangerineCount.shift();
        count += 1;
    }
    
    return count
}

