function solution(n, next = n+1) {
    return n.toString(2).match(/1/g).length === next.toString(2).match(/1/g).length ? next : solution(n,next +1)
}