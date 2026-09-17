/** NOTE:
 * [x] 중복 연산 변수화하기 (삼항연산자 내부에서 중복 실행되던 차이값 연산을 단일 변수로 변경 & 조건식과 반환 표현식 양쪽에 흩어진 계산과정 통합)
 * [x] 원시 인덱스 접근법 적용 Array.prototype.at(-1) -> [common.length - 1]로 전환 -- 코딩 테스트에서는 메서드 사용보다 [length - 1] 쓰는게 더 좋다.
 */

function solution(common) {
  const lastIdx = common.length - 1;
  const diff = common[1] - common[0];

  // 등차수열 여부 판별
  if (diff === common[2] - common[1]) {
    return common[lastIdx] + diff;
  }

  // 등비수열인 경우
  return common[lastIdx] * (common[1] / common[0]);
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
