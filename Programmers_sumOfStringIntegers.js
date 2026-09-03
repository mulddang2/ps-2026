function solution(num_str) {
  return [...num_str].map((v) => Number(v)).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('123456789'));
console.log(solution('1000000'));
