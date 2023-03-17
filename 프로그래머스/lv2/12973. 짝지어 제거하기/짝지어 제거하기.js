function solution(s) {
    if(s.length % 2 !==0) {
        return 0;
    }
    
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