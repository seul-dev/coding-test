function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    
    const timeToMinute = (timeStr) =>{
        const [hour, minute] = timeStr.split(':').map(Number);
        return hour * 60 + minute
    }
    
    const calcTotalFee = (time) => {
        if(time <= baseTime) return baseFee;
        return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee
    }
    
    const parkingrecord = {}
    
    records.forEach(record => {
        const [time, carNumber, status] = record.split(" ");
        const currentTimeInMinutes = timeToMinute(time)
        parkingrecord[carNumber] = parkingrecord[carNumber] || {totalTimes: 0, entryTime: null}
        
        if (status === "IN") {
            parkingrecord[carNumber].entryTime = currentTimeInMinutes;
        } else {
            parkingrecord[carNumber].totalTimes += currentTimeInMinutes - parkingrecord[carNumber].entryTime;
            parkingrecord[carNumber].entryTime = null
        }
    })
    
    
    return Object.keys(parkingrecord).sort().map((carNumber)=> {
        if(parkingrecord[carNumber].entryTime !== null) {
            const deadLine = 23 * 60 + 59;
            parkingrecord[carNumber].totalTimes += deadLine - parkingrecord[carNumber].entryTime;
        } 
        return calcTotalFee(parkingrecord[carNumber].totalTimes)
    })
}



