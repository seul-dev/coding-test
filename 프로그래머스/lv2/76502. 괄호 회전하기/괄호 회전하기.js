function solution(s) {
    const pair = {
        ')': '(',
        ']':'[', 
        '}':'{'
    }
    
    
    const isPair = (str) => {
        const stack = []
        
        for(const c of str) {
            if('([{'.includes(c)){
                stack.push(c)
            } else {
                if(stack.pop() !== pair[c]) {
                    return false
                } 
            }
        }
        return stack.length === 0
    }
    
    
    
    const rotate = (str) => {
        return str.slice(1) + str.slice(0,1)
    }
    
    let count = 0;
    let rotatedS = s;
    
    for (let i = 0; i < s.length ; i++) {
        if(isPair(rotatedS)) count++
        rotatedS = rotate(rotatedS)
    }
    return count
}