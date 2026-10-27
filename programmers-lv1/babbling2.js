/** NOTE:
 * [x] 정규표현식 활용해보기
 */
function solution(babbling) {
  // 1.  연속으로 같은 발음이 2번 이상 나오는 패턴 \1 은 바로 직전값 재사용
  const continuosRegExp = /(aya|ye|woo|ma)\1+/;

  // 2. 네 가지 발음 외에 다른 문자가 포함되어 있는지 확인하는 패턴
  const validRegExp = /^(aya|ye|woo|ma)+$/;
  let count = 0;

  for (const word of babbling) {
    if (!continuosRegExp.test(word) && validRegExp.test(word)) {
      count++;
    }
  }
  return count;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
