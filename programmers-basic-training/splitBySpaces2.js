/** NOTE:
 * [x] 불필요한 메서드 호출 줄이기 -- split(' ') 이후 개별 요소에 trim()을 호출하는 대신, 원본 문자열을 먼저 trim()하거나 빈 문자열 검사만 수행했는가?
 * [x] 예외 케이스 점검 -- 양 끝에 공백이 몰려있는 경우("   a   ")에도 빈 배열 요소가 남지 않고 정확히 단어만 추출되는가?
 */

function solution(my_string) {
  // [x] 정규표현식 활용 고려 -- 여러 개의 공백을 한 번에 분할할 수 있는 정규식(/\s+/) 사용을 고려해 보았는가?
  // return my_string.trim('').split(/\s+/);
  // [x] JS 형변환/Falsy 활용 -- 빈 문자열은 falsy 값
  return my_string.split(' ').filter(Boolean);
}

console.log(solution(' i    love  you'));
console.log(solution('    programmers  '));
console.log(solution('    a  '));
