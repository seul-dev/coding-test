function solution(players, callings) {
    const rankMap = new Map()
    const playerMap= new Map()

    
    players.forEach((player, rank) => {
        playerMap.set(player, rank)
        rankMap.set(rank, player)
    })
    
    callings.forEach((player)=> {
        const rank = playerMap.get(player);

        const frontPlayer = rankMap.get(rank-1)
        
        playerMap.set(player, rank -1 )
        playerMap.set(frontPlayer, rank)
        
        rankMap.set(rank -1 , player)
        rankMap.set(rank, frontPlayer)
    })
    return [...rankMap.values()]
}


