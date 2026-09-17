/** NOTE:
 * [x] map 대신 forEach 또는 for...of 활용하기 --> 배열 변환 목적일 때 map 활용, 단순 순회 및 수정 목적은 forEach나 for...of 사용하기
 * [x] 아스키 코드 하드코딩 교체하기
 * [x] 불필요한 배열 생성 최소화하기
 */
function solution(my_string) {
  let result = '';

  for (const char of my_string) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(solution('cccCCC'));
console.log(solution('abCdEfghIJ'));
