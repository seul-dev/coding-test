function solution(elements) {
    const arr = [...elements,...elements]
    const set = new Set()
    
    for (let i = 1 ; i <= elements.length ; i++) {
        for (let j = 0 ; j+i < arr.length ; j++){
            set.add(arr.slice(j,j+i).reduce((a,c) => a+c,0))
        }
    }
    return set.size
}