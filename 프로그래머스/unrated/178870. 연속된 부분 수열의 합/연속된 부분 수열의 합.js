function solution(sequence, k) {
    let start = 0; 
    let end = 0; 
    let sum = sequence[0];

    let shortestLength = Number.MAX_SAFE_INTEGER; 
    let answer = [0, 0];

    while (end < sequence.length) {
        if (sum === k) {
            if (end - start + 1 < shortestLength) {
                shortestLength = end - start + 1;
                answer = [start, end];
            }
            sum -= sequence[start];
            start++;
        } else if (sum < k) {
            end++;
            sum += sequence[end];
        } else {
            sum -= sequence[start];
            start++;
        }
    }

    return answer;
}