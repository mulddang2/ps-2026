/** NOTE:
 * [x] indexOf 대신 객체 사용해서 인덱스를 O(1) 조회 하기
 */
function solution(s, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const filteredChars = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (!skip.includes(alphabet[i])) {
      filteredChars.push(alphabet[i]);
    }
  }

  const charToIndex = {};
  for (let i = 0; i < filteredChars.length; i++) {
    charToIndex[filteredChars[i]] = i;
  }

  const n = filteredChars.length;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const currentIndex = charToIndex[s[i]];

    const nextIndex = (currentIndex + index) % n;
    result += filteredChars[nextIndex];
  }

  return result;
}

console.log(solution('aukks', 'wbqd', 5));
