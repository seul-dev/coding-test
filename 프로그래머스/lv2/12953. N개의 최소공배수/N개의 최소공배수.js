function gcd(a, b) {
    return a % b ? gcd(b, a% b): b;
}

function lcm(a,b) {
    return a * b / gcd(a,b)
}

function solution(arr) {
  return arr.reduce((a, b) => lcm(a,b));
}

