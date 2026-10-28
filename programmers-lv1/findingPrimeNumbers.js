function solution(n) {
  const arr = [];
  // 1. 2부터 n까지의 숫자를 모두 나열
  let i = 0;
  while (i <= n) {
    arr.push(i);
    i++;
  }
  // 2. 제곱근 까지 탐색, i의 배수를 지우기
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    for (let j = i + i; j < arr.length; j += i) {
      arr[j] = false;
    }
  }
  return arr.filter((v) => v > 1).length;
}

console.log(solution(10));
// console.log(solution(5))
