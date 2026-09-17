/** NOTE:
 * [x] 삼항 연산 부분은 같은 연산이다. Math.floor로 묶기 가능
 * [x] 콜백 매개변수를 재할당 -- forEach 파라미터 v를 루프 변수로 덮어쓰고 있다. (입력 원소와 작업용 변수가 섞여 읽기 불편)
 * [x] 외부 변수 누적 대신 reduce 사용하기
 * [x] while 대신 수식으로 바로 계산 가능(선택)
 * [x] 방어적 종료 조건 (선택) -- while (v!==0) 은 v가 0이나 음수면 무한 루프 이기 때문에, v > 1 쓰는게 더 안정적
 */

function countSteps(num) {
  let n = num;
  let steps = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    steps++;
  }
  return steps;
}

function solution(num_list) {
  return num_list.reduce((total, n) => total + countSteps(n), 0);
}

console.log(solution([12, 4, 15, 1, 14]));
