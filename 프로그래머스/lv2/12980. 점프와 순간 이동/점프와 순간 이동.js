function solution(n) {
    if(n === 1) return 1
    return n.toString(2).match(/1/g).length
}