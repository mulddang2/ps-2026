/** NOTE:
 * [x] 스택에 숫자인 경우만 삽입하기
 * [x] reduce 메서드에 초기값 전달해주면 빈배열일 때, 초기값 0을 반환하기 때문에 || 0 안붙여도됨
 */
function solution(s) {
  const stack = [];

  for (const item of s.split(' ')) {
    if (item === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(item));
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));
console.log(solution('10 Z 20 Z 1'));
console.log(solution('10 Z 20 Z'));
console.log(solution('-1 -2 -3 Z'));
