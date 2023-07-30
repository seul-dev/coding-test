function solution(want, number, discount) {
    let count = 0
    const wantMap = new Map(want.map((item, idx) => [item, number[idx]]))
  
    for(let i = 0; i <= discount.length - 10; i++){
        const sliced = discount.slice(i, i + 10)
        const copiedMap = new Map(wantMap)
        
        sliced.forEach((item) => {
            const itemQuantity = copiedMap.get(item)
            if(itemQuantity) {
                copiedMap.set(item, itemQuantity - 1)
            }
        })
        
        if (Array.from(copiedMap.values()).every((v)=> v === 0)) {
            count++;
        }
    }
    return count
}