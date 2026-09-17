/** NOTE:
 * [x] Set을 활용한 탐색 최적화하기 -- delete_list를 Set 객체로 변환하여 includes(O(M) 대신 has(O(1))을 사용하도록 변경)
 * [x] filter 메서드의 목적에 맞게 단일 순회로 단순화 -- 불필요한 중간 배열 제거하기(isKeep 삭제)
 * [x] 사이드 이펙트 없는 순수 함수 형태로 작성하기 -- 외부 배열(result)을 생성, push 대신, filter 가 반환하는 새로운 배열을 직접 return 하기
 */

function solution(arr, delete_list) {
  // 1. filter가 반환하는 새 배열 직접 return
  // return arr.filter((v) => !delete_list.includes(v));

  // 2. Set 활용한 성능 최적화 -- 삭제 목록 탐색 시간 복잡도를 O(1)으로 줄임
  const deleteSet = new Set(delete_list);
  return arr.filter((v) => !deleteSet.has(v));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
