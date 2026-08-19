function solution(n) {
  if (n % 2 === 1) {
    let odd = [];

    for (let i = 1; i <= n; i += 2) {
      odd.push(i);
    }
    return odd.reduce((acc, cur) => acc + cur);
  } else {
    let even = [];

    for (let i = 2; i <= n; i += 2) {
      even.push(i * i);
    }
    return even.reduce((acc, cur) => acc + cur);
  }
}

console.log(solution(7));
console.log(solution(10));
