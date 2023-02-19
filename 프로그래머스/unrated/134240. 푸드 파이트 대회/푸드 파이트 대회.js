function solution(food) {
    let foodForOne = ''
    for(let i = 1 ; i < food.length ; i++) {
        foodForOne += i.toString().repeat(Math.floor(food[i]/2))
    }
    return foodForOne + 0 + [...foodForOne].reverse().join('')
}
