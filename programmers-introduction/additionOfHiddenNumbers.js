/** NOTE:
 * [x] reduce 초기값 누락 및 불필요한 삼항 연산자 --> reduce에 초기값 0을 지정하면 빈 배열 경우에도 에러없이 0 반환 하기 때문에 삼항연산자 조건문은 불필요함.
 */
function solution(my_string) {
  // 기존 replace + split + filter 3단계를 match(/\d+/g) 1회 연산으로 대체
  // 숫자가 없는 경우 match결과가 null이 되는 엣지케이스는 || [] 으로 안전하게 처리하여 reduce 초기값 0을 통해 빈 배열 처리와 누적합 계산 한번에 해결한다.
  return (my_string.match(/\d+/g) || []).reduce(
    (acc, cur) => acc + Number(cur),
    0,
  );
}

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('aopoOpppppppp'));
console.log(solution('1a2b3c4d123Z'));
