/** NOTE:
 * [x] 문제 제한 사항에 "숫자가 한개 이상 포함되어 있습니다" 라는 조건 있으므로 || [] 예외처리 생략 가능
 * [x] 정렬 수행 전 .map(Number)로 숫자로 바꿔 sort 내부 비교 연산 시, 암묵적 형변환 연산 횟수 단축 가능
 */
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .map(Number)
    .sort((a, b) => a - b);
}

console.log(solution('hi12392'));
console.log(solution('p2o4i8gj2'));
console.log(solution('abcde0'));
