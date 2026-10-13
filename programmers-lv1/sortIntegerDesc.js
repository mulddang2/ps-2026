/** NOTE:
 * [x] 빈도배열 기반 방식 활용 -- sort 사용 대신, 각 숫자의 등장 횟수 기록한 뒤 역순으로 이어붙이면 정렬 생략가능
 */
function solution(n) {
  const counts = new Uint8Array(10);

  while (n > 0) {
    counts[n % 10]++;
    n = Math.trunc(n / 10);
  }
  console.log(counts)

  let res = '';
  for (let i = 9; i >= 0; i--) {
    if (counts[i] > 0) {
      res += i.toString().repeat(counts[i]);
    }
  }
  return Number(res);
}

console.log(solution(118372));
