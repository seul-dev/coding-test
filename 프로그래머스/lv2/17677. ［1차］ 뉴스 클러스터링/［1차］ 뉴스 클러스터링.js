function solution(str1, str2) {
    const arr1 = createMultisets(str1)
    const arr2 = createMultisets(str2)
    
    const set = new Set([...arr1, ...arr2])
    
    let intersection = 0
    let union = 0
    
    set.forEach((item) => {
        const has1 = arr1.filter((v) => v === item).length
        const has2 = arr2.filter((v) => v === item).length
        
        intersection += Math.min(has1, has2)
        union += Math.max(has1, has2)
    })
    
    return union === 0 ? 65536 : Math.floor(intersection/union * 65536)
}

function createMultisets (str) {
    const multisets = []
    
    const regex = /[a-zA-Z]{2}/g;
    
    for(let i = 0; i < str.length; i++) {
        const candidates = str.slice(i, i+2);
        if(candidates.match(regex)) {
            multisets.push(candidates.toLowerCase())
        }
    }
    
    return multisets
}
