function solution(sides) {
  // 1. 두 변 구분하기
  sides.sort((a, b) => a - b);
  const min = sides[0];
  const max = sides[1];
  // 2. 개수 세기
  let count = 0;
  // case 1:기존 변 중 Max가 가장 긴 변인 경우
  for (let c = 1; c < min + max; c++) {
    if (c <= max && max < min + c) {
      count++;
      // case 2: 새로운 c가 가장 긴 변인 경우
    } else if (max < c && c < min + max) {
      count++;
    }
  }
  return count;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
