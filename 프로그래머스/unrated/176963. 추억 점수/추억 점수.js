function solution(name, yearning, photo) {
    const refTable = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx]
        return acc
    },{})
    
    const result = photo.map((arr) => {
        return arr.reduce((acc, cur)=> refTable[cur] ? acc + refTable[cur]: acc, 0)
    })
    return result
}