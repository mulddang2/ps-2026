function solution(numbers) {
  let tempMax = 0;
  const temp = Math.max(...numbers);
  let max = 0;
  const tempArr2 = numbers.filter((v) => v < temp);


  // 둘다 음수 일 때
  const [a, b] = numbers.filter((v) => v < 0);
  if (a && b) {
    tempMax = a * b;

  } else {
    // max 보다 작은것 중에 가장 큰것
    max = temp * Math.max(...tempArr2);
  }
  return tempMax < max ? max : tempMax
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
