function solution(topping) {
    let answer = 0;
    const map = new Map();
    const brother = new Set();
    
    topping.forEach((t) => {
        const count = (map.get(t) || 0) + 1
        map.set(t, count)
    })
    
    
    for(const t of topping) {
        brother.add(t)
        map.get(t)=== 1? map.delete(t) : map.set(t, map.get(t) -1)
        
        if(brother.size === map.size) answer++;
        if(brother.size > map.size) break;
    }
    return answer
}