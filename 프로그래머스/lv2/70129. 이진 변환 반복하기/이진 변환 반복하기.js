function solution(s) {
    let x = s;
    
    const answer = [0,0]
    
    while(x !== '1') {
        const oneCount = x.match(/1/g).length
        answer[1] += x.length - oneCount
        x = oneCount.toString('2')
        answer[0]++
    }
    
    return answer;
}