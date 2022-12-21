function solution(a, b) {
    let gcd = 1;
    for(let i = 1; i <= a;i++) {
        if((a%i===0)&& (b%i===0)) {
            gcd = i
        }
    }
    let tempB = b / gcd
    
    while(tempB % 2 === 0) tempB /= 2
    while(tempB % 5 === 0) tempB /= 5
    
    return tempB === 1 ? 1: 2
}
