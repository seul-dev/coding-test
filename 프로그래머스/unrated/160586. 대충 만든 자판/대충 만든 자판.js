function solution(keymap, targets) {
    const map = new Map()
    for(const key of keymap) {
        for(let i=0; i<key.length;i++) {
            if(map.get(key[i]) <= i) {
                break;
            }
            map.set(key[i], i+1)
        }
    }

    return targets.map((target) => [...target].reduce((sum, acc) => sum + map.get(acc), 0) || -1)
}

