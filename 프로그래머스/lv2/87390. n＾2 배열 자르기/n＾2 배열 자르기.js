function solution(n, left, right) {
    const answer = []
    for(let index = left; index <= right ; index++) {
        const x = Math.floor(index / n)
        const y = index % n
        
        answer.push(Math.max(x,y) + 1)
    }
    return answer
}


