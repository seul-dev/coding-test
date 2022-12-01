function solution(before, after) {
    const beforeStr = [...before].sort().join()
    const afterStr = [...after].sort().join()
    
    return beforeStr === afterStr ? 1 : 0
}
