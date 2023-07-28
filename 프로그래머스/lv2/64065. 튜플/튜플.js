function solution(s) {
    const answer = [];
    const arr = JSON.parse(s.replace(/\{/g, "[").replace(/\}/g, "]"))
    
    arr.sort((a,b) => a.length - b.length)
    
    arr.forEach((row) => {
        row.forEach((v) => {
            if(!answer.includes(v)) {
                answer.push(v)
            }
        })
    })
    
    return answer;
}