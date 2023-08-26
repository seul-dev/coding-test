function solution(book_time) {
    const timeToMinute = (time) => {
        const [h, m] = time.split(':').map(Number)
        return h * 60 + m
    }
    
    const reservations = book_time.map(([start, end]) => {
        return [timeToMinute(start), timeToMinute(end) +10]
    })
    
    reservations.sort((a,b) => a[0] - b[0]) 
    
    let roomCount = 0;
    let rooms = [];
    
    reservations.forEach(([start,end]) => {
        rooms = rooms.filter((room)=> room[1] > start)
        rooms.push([start,end])
        roomCount = Math.max(roomCount, rooms.length);
    })
    
    return roomCount
}