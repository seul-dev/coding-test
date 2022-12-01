function solution(before, after) {
    const beforeArr = [...before].sort().join()
    const afterArr = [...after].sort().join()
    
    return beforeArr === afterArr ? 1 : 0
}