function solution(brown, yellow) {
    const size = brown + yellow
    for(let height = 3 ; height <= size ; height++) {
        let width = size / height;
        
        if((width - 2) * (height -2) === yellow) {
            return [width, height]
        }
    }
}
