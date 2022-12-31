function solution(t, p) {
    const pLength =  p.length;
    const arr = []
    for(let i = 0; i<= t.length - pLength; i++){
        const sliced = t.slice(i, i+pLength)
        arr.push(sliced)
    }
    return arr.filter((el)=> parseInt(el) <= parseInt(p)).length
}

