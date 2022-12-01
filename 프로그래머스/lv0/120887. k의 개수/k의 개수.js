function solution(i, j, k) {
    const arr = [...Array(j-i+1).fill().map((el, idx)=> i+idx).join('')]
    return arr.filter((el)=> el === k.toString()).length

}