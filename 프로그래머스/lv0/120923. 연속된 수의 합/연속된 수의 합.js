function solution(num, total) {
    let head = 0; 
    const queue = Array(num).fill(0).map((_, i)=> head+ i)
    let tail =  queue[queue.length -1] 
    let queueSum = queue.reduce((acc, cur) => acc + cur, 0 )
    
    while(queueSum !== total) {
        if(queueSum < total) {
            tail++;
            queueSum = queueSum + tail - head;
            head++;
            queue.push(tail)
            queue.shift()
        } else {
            head--;
            queueSum = queueSum + head - tail;
            tail--;
            queue.pop()
            queue.unshift(head)
        }
    }
    return queue
} 
