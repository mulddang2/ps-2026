/** NOTE:
 * [x] split() 보다는 for...of 사용해서 불필요한 중간 배열 생성 방지하기
 */
function solution(X, Y) {
  // 0부터 9까지의 숫자가 X와 Y에 각각 몇 개씩 들어있는지
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);

  for (const char of X) {
    xArr[char - '0']++;
  }

  for (const char of Y) {
    yArr[char - '0']++;
  }

  const result = [];
  for (let i = 9; i >= 0; i--) {
    const count = Math.min(xArr[i], yArr[i]);

    if (count > 0) {
      // i를 commonNum번 반복해서 result에 추가
      result.push(String(i).repeat(count));
    }
  }
  // result가 완전히 비어있는 경우
  if (result.length === 0) return '-1';

  const combined = result.join('');
  // result가 '000'과 같이 0으로만 이뤄진 경우
  if (combined[0] === '0') return '0';

  return combined;
}
