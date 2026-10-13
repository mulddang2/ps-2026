/** NOTE:
 * [x] 단일 순회 카운터로 최적화 하기
 */
function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === 'p' || char === 'P') {
      count++;
    } else if (char === 'y' || char === 'Y') {
      count--;
    }
  }

  return count === 0;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
