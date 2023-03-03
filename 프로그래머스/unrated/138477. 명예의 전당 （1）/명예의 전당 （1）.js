function solution(k, score) {
  
    const stack = [];

    return score.reduce((acc, cur) => {
        stack.push(cur);
        stack.sort((a, b) => a -b)
        
        if(stack.length > k ) {
            stack.shift()
        }
        
        return [...acc, stack[0]];
    }, []);

}

