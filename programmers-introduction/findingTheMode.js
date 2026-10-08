function solution(array) {
  const countMap = new Map();

  // 1. 빈도수 카운트
  for (const num of array) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let maxCount = 0; // 지금까지 발견된 가장 높은 빈도수
  let maxNum = -1; // 가장 자주 나온 숫자
  let isMultiple = false; // 최빈값이 여러개면 true

  // 2. 중복 제거한 원소수로 최빈값 탐색
  for (const [num, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      maxNum = num;
      isMultiple = false;
    } else if (count === maxCount) {
      isMultiple = true;
    }
  }

  return isMultiple ? -1 : maxNum;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
