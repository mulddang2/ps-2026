function solution(price, money, count) {
  let curPrice = 0;

  let i = 1;
  while (i <= count) {
    curPrice += price * i;
    i++;
  }
  return curPrice <= money ? 0 : curPrice - money;
}

console.log(solution(3, 20, 4));
console.log(solution(1, 1000000000, 2500));
