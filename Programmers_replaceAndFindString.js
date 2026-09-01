/** NOTE:
 * [x] 길이가 비교적 짧은 pet을 뒤집어 myString과 비교해도 됨
 * [x] 삼항 연산자 대신 숫자 형변환(+) 활용
 */
function solution(myString, pat) {
  const transPat = [...pat].map((v) => (v === 'A' ? 'B' : 'A')).join('');
  return +myString.includes(transPat);
}

console.log(solution('ABBAA', 'AABB'));
console.log(solution('ABAB', 'ABAB'));
