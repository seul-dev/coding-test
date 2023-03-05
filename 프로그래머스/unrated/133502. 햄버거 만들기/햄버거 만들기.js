function solution(ingredient) {
    const stack = [];
    let count = 0;
    ingredient.forEach((item) => {
        stack.push(item)
        
        if(stack.length >= 4) {
            if(stack.slice(-4).join('') === '1231'){
                stack.splice(-4)
                count++
            }
            
        }
    })
    return count
}