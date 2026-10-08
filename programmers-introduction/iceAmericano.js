function solution(money) {
  const PRICE = 5500;
  const num = Math.floor(money / PRICE);
  return [num, money - PRICE * num];
}

console.log(solution(5500));
console.log(solution(15000));
