/** NOTE:
 * [x] 불필요한 제어문 제거 -- if-else 분기 내에서 의미 없이 중복 작성된 continue 삭제하기
 * [x] 공통 로직 통합 -- stk.length === 0일 때와 stk.at(-1) !== num일 때 모두 push하는 점을 활용해 조건식 단순화하기
 * [x] 최신 JS 문법 활용 -- 인덱스 관리(i++) 대신 for...of 루프를 사용하고, stk[stk.length - 1] 대신 stk.at(-1) 활용하기
 * [x] 변수 키워드 최적화 -- Re-assignment(재할당)가 일어나지 않는 stk 배열 선언 시 let 대신 const 사용하기
 */

function solution(arr) {
  const stk = [];
  for (const num of arr) {
    if (stk.at(-1) === num) {
      stk.pop();
    } else {
      stk.push(num);
    }
  }

  return stk.length === 0 ? [-1] : stk;
}
