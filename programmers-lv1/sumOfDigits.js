/** NOTE:
 * [x] 자연수 범위로 제한 했지만, 그래도 N = 0이 만약 입력될 경우, 반복문 실행되지 않기 때문에 좀더 방어 코드로 while 조건 작성
 * [x] 단순 버림 시, floor 대신 trunc 사용
 */
function solution(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }

  return sum;
}

console.log(solution(123));
console.log(solution(987));
