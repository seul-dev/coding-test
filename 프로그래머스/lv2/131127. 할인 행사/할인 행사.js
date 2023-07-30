function solution(want, number, discount) {
    let answer = 0
    const wantMap = new Map()
    
    want.forEach((item, idx) => {
        wantMap.set(item, number[idx])
    })
  
    for(let i = 0; i <= discount.length - 10; i++){
        const sliced = discount.slice(i, i + 10)
        const copiedMap = new Map(wantMap)
        
        sliced.forEach((item) => {
            const itemQuantity = copiedMap.get(item)
            if(itemQuantity) {
                copiedMap.set(item, itemQuantity -1)
            }
            
            if(copiedMap.get(item) === 0){
                copiedMap.delete(item)
            }
            
        })
        
        if (copiedMap.size === 0) {
            answer++;
        }
    }
    return answer
}