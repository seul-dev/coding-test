function solution(n, t, m, p) {
    let str = ''
    let number = 0
    
    while(str.length < t * m) {
        str += (number++).toString(n)
    }
    str = str.slice(0, t * m)
    
    return str.split('').filter((_,idx) => idx % m === p - 1).join('').toUpperCase()

}


