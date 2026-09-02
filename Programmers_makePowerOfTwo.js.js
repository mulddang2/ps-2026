function solution(arr) {
  let targetLength = 1;

  // 목표 2의 거듭제곱 길이 찾기
  while (targetLength < arr.length) {
    targetLength *= 2;
  }
  return [...arr].concat(Array(targetLength - arr.length).fill(0));
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
