function solution(t, p) {
    let count = 0;
    
    const pLength =  p.length;
    for(let i = 0; i<= t.length - pLength; i++){
        const sliced = t.slice(i, i+pLength)
        if(+sliced <= +p) count++
    }
    return count
}

