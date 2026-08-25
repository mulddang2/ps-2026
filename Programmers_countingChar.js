/** NOTE:
 * [x] charCodeAt() 인자 작성하기
 * [x] v === v.toUpperCase() -- 문자열 변환 + 비교라 새 문자열이 생김
 * [x] [...my_string].forEach -- 문자열 전체를 배열로 복사하는 문제, for-of 쓰면 복사가 없다.
 *[x] 매직 넘버 65/97/26 -- 'A.charCodeAt(0) 같은 상수로 이름 붙여 의도 개선
 * [x] +=1 vs ++
 * [x] else 블록 중괄호 누락 -- if는 블록인데, else는 한 줄이므로 스타일 통일하기
 */
function solution(my_string) {
  const UPPER_A = 'A'.charCodeAt(0); // 65
  const UPPER_Z = 'Z'.charCodeAt(0); // 90
  const LOWER_A = 'a'.charCodeAt(0); // 97
  const ALPHABET_SIZE = 26;
  const result = new Array(ALPHABET_SIZE * 2).fill(0);

  for (const ch of my_string) {
    const code = ch.charCodeAt(0);
    const idx =
      code <= UPPER_Z ? code - UPPER_A : code - LOWER_A + ALPHABET_SIZE;
    result[idx]++;
  }

  return result;
}

console.log(solution('Programmers'));
