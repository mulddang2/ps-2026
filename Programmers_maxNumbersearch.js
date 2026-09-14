/** NOTE:
 * [x] 대규모 배열 입력 시 Math.max(...array) 대신 단일 루프 적용하기
 * [x] 단일 순회 알고리즘 적용하기(하나의 반복문 안에서 최댓값과 인덱스를 동시 갱신하기)
 */
function solution(array) {
  let maxNumber = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
      maxIndex = i;
    }
  }
  return [maxNumber, maxIndex];
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
