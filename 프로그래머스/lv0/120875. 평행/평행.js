function solution(dots) {
    const combi = []
    for(let i = 0; i < dots.length ; i++) {
        for(let j = i+1; j< dots.length; j++){
            const slope = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0])
            combi.push(slope)
        }
    }
    const set = [...new Set(combi)]
    
    return combi.length !== set.length ? 1 : 0
}

