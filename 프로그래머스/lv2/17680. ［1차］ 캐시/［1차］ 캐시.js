function solution(cacheSize, cities) {
    let time = 0;
    const cache = []
    
    if(cacheSize=== 0) return cities.length * 5
    
    cities.forEach((rawCity) => {
        const city = rawCity.toLowerCase()
        
        if(cache.includes(city)) {
            time += 1
            cache.splice(cache.indexOf(city), 1)
            cache.push(city)
        } else {
            if(cache.length === cacheSize) {
                cache.shift()
            }
            time += 5
            cache.push(city)
        }
        
        
    })
    

    return time;
}