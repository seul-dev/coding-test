function solution(m, musicinfos) {
    const replaceMusic = (melody) => melody.replaceAll(/(C|D|F|G|A)#/g, (_,letter) => letter.toLowerCase());
    
    const getFullMusic = (startTime, endTime, music) => {
        const [startMin, endMin]=[startTime, endTime].map((v)=> v.split(':').reduce((h, m)=> h * 60 + m,0))
        const playTime = endMin - startMin
        const repeatingTime = Math.ceil(playTime / music.length)
        return [playTime, music.repeat(repeatingTime)]
    } 
    
    const melody = replaceMusic(m)
    
    const arr = musicinfos.map((musicInfo)=> {
        const [start, end, title, music]= musicInfo.split(',')
        const [playTime, fullMusic] = getFullMusic(start, end, replaceMusic(music))
        
        return {title, playTime, fullMusic}
    }).filter(({title, playTime, fullMusic}) => fullMusic.includes(melody))
    .sort((a,b)=> b.playTime - a.playTime)
    
    return arr[0].title || "(None)"
}

