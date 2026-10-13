/** NOTE:
 * [x] 스프레드 연산자 사용 자제 --> 데이터 많아졌을 경우 콜스택 초과 대비
 */
function solution(arr) {
  if (arr.length <= 1) return [-1];

  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return arr.filter((_, i) => i !== minIndex);
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
