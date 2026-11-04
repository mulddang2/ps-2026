/** NOTE:
 * [x] 단일 순회와 Set 자료구조 활용
 */
function solution(lottos, win_nums) {
  const rankMap = [6, 6, 5, 4, 3, 2, 1];
  const winSet = new Set(win_nums);

  let zeroCount = 0;
  let matchCount = 0;

  for (let i = 0; i < lottos.length; i++) {
    const num = lottos[i];
    if (num === 0) {
      zeroCount++;
    } else if (winSet.has(num)) {
      matchCount++;
    }
  }

  return [rankMap[matchCount + zeroCount], rankMap[matchCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
