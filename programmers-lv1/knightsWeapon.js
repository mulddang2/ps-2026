function solution(number, limit, power) {
  // 1부터 number까지 각 숫자의 약수 개수를 저장할 배열
  const divisors = new Array(number + 1).fill(0);

  // 배수 탐색을 통한 약수 개수 누적 ( i=약수의 역할, j=배수의 역할)
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisors[j]++;
    }
  }

  let total = 0;
  for (let i = 1; i <= number; i++) {
    const count = divisors[i];
    total += count > limit ? power : count;
  }
  return total;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
console.log(solution(16, 3, 2));
