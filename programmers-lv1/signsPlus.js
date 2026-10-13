/** NOTE:
 * [x] 1. 반복문 내 배열 길이 캐싱 적용하기 -- 반복문 돌 때마다 배열의 length 속성을 매번 조회하지 않고 변수(len)에 캐싱하여 미세한 성능 손실 방지
 * [x] 2. reduce 활용해보기
 */
function solution(absolutes, signs) {
  // 1. 반복문 내 배열 길이 캐싱 적용
  // let total = 0;
  // for (let i = 0, len = absolutes.length; i < len; i++) {
  //   total += signs[i] ? absolutes[i] : -absolutes[i];
  // }
  // return total;

  // 2. reduce 활용
  return absolutes.reduce((acc, val, i) => acc + (signs[i] ? val : -val), 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
