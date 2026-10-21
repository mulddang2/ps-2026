/** NOTE:
 * [x] for문 활용하기 -- [...s]에서 배열 만들고, map 새 배열 만들고 join('')으로 합치는 과정에서 불필요한 중간 배열 생성
 */
function solution(s, n) {
  const chars = [];

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);

    if (code === 32) {
      // 공백
      chars.push(32);
    } else if (code >= 97 && code <= 122) {
      // 소문자
      chars.push(((code - 97 + n) % 26) + 97);
    } else if (code >= 65 && code <= 90) {
      // 대문자
      chars.push(((code - 65 + n) % 26) + 65);
    } else {
      chars.push(code);
    }
  }
  return String.fromCharCode(...chars);
}

console.log(solution('Y', 25));
console.log(solution('z', 25));
console.log(solution('a', 25));
console.log(solution('a     B     z', 4));
