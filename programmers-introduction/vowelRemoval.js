/** NOTE:
 * [x] OR 연산자 대신 문자클래스 사용하기
 * [x] 대량 테스트 케이스 최적화 고려 시, 정규표현식 변수 선언을 함수 외부 모듈 스코프로 이동하기
 */
const VOWELS = /[aeiou]/g;

function solution(my_string) {
  return my_string.replace(VOWELS, '');
}

console.log(solution('bus'));
console.log(solution('nice to meet you'));
