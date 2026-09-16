function solution(chicken) {
  const order = chicken;
  let temp = 1;
  let count = 0;
  while (chicken > 0) {
    if (chicken === 1) break;
    chicken = Math.floor(chicken / 10);
    temp = temp * chicken;
    count += chicken;
  }
  (order - temp) % 10 === 0 ? count : count++;
  return count;
}

console.log(solution(100));
console.log(solution(1081));
