function solution(n, words) {
    const dict = new Set()
    dict.add(words[0])
    
    for(let i = 1; i < words.length ; i++) {
        const cur = words[i]
        const prev = words[i - 1]
        
        if(dict.has(cur) || prev.slice(-1) !== cur[0]) {
            return [i % n +1, Math.floor(i /n) +1]
        }
        
        dict.add(cur)
    }
    
    return [0,0]
}