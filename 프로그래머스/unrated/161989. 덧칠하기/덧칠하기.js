function solution(n, m, section) {
    let answer = 0
    let painted = 0
    section.forEach(range=>{
        if(painted < range){
            answer++
            painted = range+m-1
        }
    })
    return answer
}