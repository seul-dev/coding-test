function solution(s) {
    const dict = {};
    const answer = [];
    
    for(let i = 0; i< s.length; i++) {
        const el = s[i];
        if(dict[el] === undefined) {
            answer.push(-1);
        } else {
            answer.push(i - dict[el])
        }
        dict[el] = i
    }
    return answer;
}