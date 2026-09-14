/** NOTE:
 * [x] 시간복잡도 개선: 현재 O(N제곱) -> O(N) 시간으로 해결해보기
 */

function solution(s) {
  // 1. 알파벳 26개 빈도수 카운팅 배열 생성
  const counts = new Array(26).fill(0);

  // 2. 문자열 1회 순회하며 빈도수 계산 - O(N)
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  // 3. 'a'(0)부터 'z'(25)까지 순서대로 빈도수 1인 문자 결합 - O(26)
  let result = '';
  for (let i = 0; i < 26; i++) {
    if (counts[i] === 1) {
      result += String.fromCharCode(i + 97);
    }
  }
  
  return result;
}

console.log(solution('abcabcadc'));
console.log(solution('abdc'));
console.log(solution('hello'));
