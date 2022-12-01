function solution(before, after) {
    const beforeArr = [...before].sort()
    const afterArr = [...after].sort()
    
    return beforeArr.filter((el, idx)=> el === afterArr[idx]).length === afterArr.length ? 1 : 0
}