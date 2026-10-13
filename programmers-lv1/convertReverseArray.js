/** NOTE:
 * [x] 코테 권장방식은 산술연산(나머지와 몫) 활용 방식 -- 문자열 변환이나 배열 분할 등의 중간 연산 없이 숫자 마지막 자리 추출해 바로 배열에 담기 때문에 메모리 할당 최소화
 */
function solution(n) {
  const result = [];
  do {
    result.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return result;
}

console.log(solution(12345));
