/** NOTE:
 * [x] 반복문 범위 최적화: i < myString.length 대신 i <= myString.length - pat.length 사용하여 불필요한 루프 제외하기
 * [x] 가독성 향상: slice(i, i + pat.length) === pat 대신 myString.startsWith(pat, i) 메서드 활용 고려해보기
 * [x] 증감 연산자 단축: count += 1 대신 count++ 사용하기 (취향/컨벤션 차이)
 */

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.startsWith(pat, i)) {
      count++;
    }
  }
  return count;
}

console.log(solution('banana', 'ana'));
console.log(solution('aaaa', 'aa'));
