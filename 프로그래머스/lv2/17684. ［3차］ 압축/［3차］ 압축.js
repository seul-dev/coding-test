function solution(msg) {
    const dict = new Map();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < alphabet.length; i++) {
        dict.set(alphabet[i], i + 1);
    }
    
    const answer = [];
    let idx = dict.size + 1;
    let word = ''
    
    for (let i = 0; i < msg.length; i++) {
        const currentChar = msg[i];
        const newWord = word + currentChar;

        if (dict.has(newWord)) {
            word = newWord;
        } else {
            dict.set(newWord, idx++);
            answer.push(dict.get(word));
            word = currentChar;
        }
    }

    answer.push(dict.get(word));
    
    return answer
}