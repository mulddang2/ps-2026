/** NOTE:
 * [x] 정규식을 활용해서 개선해보기 -- split('') 및 map() 연산 과정에서 발생하는 중간 배열 생성을 생략하고, 문자열 단위에서 즉시 대체 연산을 수행하기 떄문에 메모리 생성 오버헤드가 줄어듦
 */

function solution(picture, k) {
  const result = [];

  for (const row of picture) {
    // 모든 문자를 k번 반복
    const expandedRow = row.replace(/./g, (char) => char.repeat(k));

    // 세로 k번 추가
    for (let j = 0; j < k; j++) {
      result.push(expandedRow);
    }
  }
  return result;
}

console.log(
  solution(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2,
  ),
);
console.log(solution(['x.x', '.x.', 'x.x'], 3));
