/** NOTE:
 *  [x] filter를 부수효과용 순회로 쓰지 않기 → 반환값을 쓰지 않을 거면 forEach 또는 for...of
    [x] "분리"가 목적이면 filter 두 번으로 의도를 드러내기
    [x] 콜백에서 사용하지 않는 파라미터(i) 제거하기
    [x] 삼항 연산자는 값을 고를 때만 사용, 분기 실행은 if/else로
    [x] 반복되는 Number(arr.join("")) 패턴을 작은 헬퍼로 묶어 중복 제거
    [x] 변수명 oddArr/evenArr의 Arr 접미사 재고 (타입은 값에서 드러남 → odds/evens 같은 복수형이 관례)
    [x] 홀수 판정 시 v % 2 === 1 사용 주의 — 이 문제는 원소가 1~9라 안전하지만, 음수가 들어오면 -3 % 2 === -1이라 실패합니다. 범용 코드에선 v % 2 !== 0을 습관으로
 */

function solution(num_list) {
  const toNumber = (arr) => Number(arr.join(''));
  const odds = [];
  const evens = [];

  num_list.forEach((v) => {
    if (v % 2 !== 0) odds.push(v);
    else evens.push(v);
  });

  return toNumber(odds) + toNumber(evens);
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
