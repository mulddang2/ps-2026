/** NOTE:
 * [x] 상태 배열 기반 설계 -- 학생번호를 인덱스로 활용해서 고정 크기 상태 배열로 수정
 * [x] 반복문 내, filter, includes 대신 인덱스 직접 참조로 변경
 */

function solution(n, lost, reserve) {
  // 1번 부터 n번 학생의 체육복 상태 관리하는 배열 생성 (0: 정상, -1: 도난, 1: 여벌)
  // 가장 마지막 n의 뒷번호 확인을 고려해서 n + 2로 크기 생성
  const students = new Array(n + 2).fill(0);

  lost.forEach((v) => (students[v] -= 1));
  reserve.forEach((v) => (students[v] += 1));

  // 번호 순으로 조회하며 탐욕법 적용
  for (let i = 1; i <= n; i++) {
    if (students[i] === -1) {
      if (students[i - 1] === 1) {
        students[i - 1] = 0;
        students[i] = 0;
      } else if (students[i + 1] === 1) {
        students[i + 1] = 0;
        students[i] = 0;
      }
    }
  }

  // 체육복을 소지한 학생 수 계산
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (students[i] >= 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
