function solution(dirs) {
    const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    const [MIN, MAX] = [-5, 5];

    let prevX = 0;
    let prevY = 0;

    const visitedRoutes = new Set();

    for (const dir of dirs) {
        let curX = prevX + move[dir][0];
        let curY = prevY + move[dir][1];

        if (curX > MAX || curX < MIN || curY > MAX || curY < MIN) {
            continue;
        }

        visitedRoutes.add(`${prevX}${prevY}${curX}${curY}`);
        visitedRoutes.add(`${curX}${curY}${prevX}${prevY}`);
        
        prevX = curX;
        prevY = curY;
    }

    return visitedRoutes.size / 2;
}


