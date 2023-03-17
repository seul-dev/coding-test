function solution(s) {
    const stack =[]; 
    
    for(const char of s) {
        if(!stack.length || stack[stack.length -1] !== char) {
            stack.push(char)
            continue;
        } 
        stack.pop()
        
    }
    return stack.length ? 0 :1
}