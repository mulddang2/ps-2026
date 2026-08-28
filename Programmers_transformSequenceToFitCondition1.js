/** NOTE:
 * [x] i 미사용 매개변수 지우기
 * [x] let cur = v 불필요
 * [x] return (cur /= 2) -- 반환값 자리에서 대입 불필요
 * [x] 중괄호 일관성 있게 하기
 * [x] 조건식 단순화 -- v % 2 === 0 아니면 자동으로 홀수이기 때문에 삼항 연산자로 수정해보기
 *
 *
 */
function solution(arr) {
  return arr.map((v) => {
    if (v % 2 === 0) return v >= 50 ? v / 2 : v;
    return v < 50 ? v * 2 : v;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
