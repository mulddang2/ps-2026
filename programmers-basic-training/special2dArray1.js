/** NOTE:
 * [x] 배열 초기화 로직 단순화하기 -- 기본값을 한 번에 설정하고 변경이 필요한 위치만 접근하도록 설계
 * [x] Array(n) 형태 대신, { length: n } 형태의 객체를 전달하기
 * [x] 대각선 요소 직접 접근하기 -- i=j 조건을 찾기 위해 2중 반목문 전체를 순회하지 않고 arr[i][i]로 직접 접근하기
 * [x] 삼항연산자 올바른 사용 -- 단순 변수 대입이나 상태 변경 목적으로 삼항 연산자 활용하지 않기, 조건문 기반의 대입은 if문이나 선언형 반환 구조로 변경하여 코드 가독성 확보하기
 */

function solution(n) {
  const arr = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    arr[i][i] = 1;
  }

  return arr;
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(1));
