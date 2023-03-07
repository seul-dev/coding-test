function solution(s, skip, index) {
    const skipSet = new Set(skip)
    const alphabet =  [...'abcdefghijklmnopqrstuvwxyz'].filter((el) => !skipSet.has(el))
    
    
    return [...s].reduce((ans, el) => {
        const newIdx = (alphabet.indexOf(el) + index) % alphabet.length; 
        return ans + alphabet[newIdx]
    }, '')
}