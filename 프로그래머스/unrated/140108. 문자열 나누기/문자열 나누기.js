
function solution(s) {
    let target = '';
    let count = 0
    let answer = 0;
    
    for (let char of s) {
        if (!target){
            target = char;
        }
        
        count += target === char ? 1 : -1;
        
        if (!count) {
            target = '';
            answer++;
        }
    }
    return answer + (count ? 1: 0)
}
