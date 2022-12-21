function solution(numlist, n) {
    const sortedNumList = numlist.slice().sort((a, b) => {
        const [distanceAN, distanceBN] = [Math.abs(a - n), Math.abs(b - n)]
        if (distanceAN === distanceBN) return b - a 
        return distanceAN - distanceBN
    })
          
    return sortedNumList
}
