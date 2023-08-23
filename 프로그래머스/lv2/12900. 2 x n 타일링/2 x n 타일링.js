function solution(n) {
    const MOD = 1000000007;
    
    const fib = new Array(n+1).fill(0)
    fib[0] = 1;
    fib[1] = 1;
    
    for(let i = 2; i <= n; i++) {
       fib[i] = (fib[i-1] + fib[i-2]) % MOD;
    }
    
    return fib[n]
}
