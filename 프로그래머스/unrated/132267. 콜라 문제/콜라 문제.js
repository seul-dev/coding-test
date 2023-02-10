function solution(a, b, n) {
    let total = n;
    let freeCola = 0;
    
    while(total >= a) {
        const temp = parseInt(total / a) * b;
        freeCola += temp;
        total = temp + (total % a)
    }
    return freeCola
}
