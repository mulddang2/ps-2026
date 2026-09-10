/** NOTE:
 * [x] Math.ceil() 계산으로 결과 배열의 정적 크기 초기화
 * [x] push 메서드 대신 인덱스 직접 할당 방식으로 메모리 재배치 오버헤드 방지
 */

function solution(my_str, n) {
  const len = my_str.length;
  const count = Math.ceil(len / n);
  const result = new Array(count);

  for (let i = 0; i < count; i++) {
    const start = i * n;
    result[i] = my_str.slice(start, start + n);
  }
  return result;
}

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
