function solution(numbers) {
    return getPermutations(numbers).filter((num) => isPrimeNumber(num)).length
}

function getPermutations(str) {
    const answer = new Set()
    const check = Array.from({length: str.length}, ()=> 0)
    
    const dfs = (cur) => {
        answer.add(Number(cur))
        for (let i = 0; i < str.length ; i++ ){
            if(check[i] === 0) {
                check[i] = 1
                dfs(cur + str[i])
                check[i] = 0
            }
        }
    }
    
    dfs('')
    return [...answer] 
          
}

function isPrimeNumber(num) {
    if(num <= 1) return false; 
    
    for(let i = 2; i <= Math.sqrt(num) ; i++) {
        if(num % i === 0) {
            return false
        }
    }
    
    return true
}
