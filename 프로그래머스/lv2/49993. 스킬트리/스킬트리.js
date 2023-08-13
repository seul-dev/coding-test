function solution(skill, skill_trees) {
    let answer = 0
    
    for(const skillTree of skill_trees) {
        
        const skillOrder = [];
        
        for(const s of skillTree) {
            if(skill.includes(s)) {
                skillOrder.push(s)
            }
        }
        
        if(skillOrder.join('') === skill.slice(0, skillOrder.length)) {
            answer++
        }
        
        
    }
    
    return answer
}