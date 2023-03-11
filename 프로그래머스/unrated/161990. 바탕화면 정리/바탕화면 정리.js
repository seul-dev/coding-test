function solution(wallpaper) {
    const X = [];
    const Y = [];
    
    const wallpaperArr = wallpaper.map((el)=> el.split(''))
    wallpaperArr.forEach((row, x) => {
        row.forEach((item, y)=>{
            if(item === '#') {
                X.push(x)
                Y.push(y)
            }
        })
    })
    
    return [
        Math.min(...X),
        Math.min(...Y),
        Math.max(...X) + 1,
        Math.max(...Y) + 1
    ]
}