function solution(k, m, score) {
    let answer = 0;
    const sortedArr = [...score].sort((a,b) => b-a) 
    
    for(let i = 1; i <= Math.floor(sortedArr.length/m); i++) {
        answer += sortedArr[m * i - 1] * m
    }
    return answer
}