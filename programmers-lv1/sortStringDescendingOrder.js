/** NOTE:
 * [x] 불필요한 중간 배열 객체가 여러번 생성됨
 * 스프레드 연산자로 배열 생성 -> map으로 유니코드 배열 만들고 -> 정렬 후 다시 map으로 문자열 배열 만드는 과정
 */
function solution(s) {
  return [...s].sort().reverse().join('');
}

console.log(solution('Zbcdefg'));
