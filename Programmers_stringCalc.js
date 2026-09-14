/** NOTE:
 * [x] 반복문 스텝 제어 수정 (i += 2)
 */
function solution(my_string) {
  const tokens = my_string.split(' ');

  let result = Number(tokens[0]);

  // 연산자가 위치한 홀수 인덱스만 2씩 증가하며 순회
  for (let i = 1; i < tokens.length; i += 2) {
    if (tokens[i] === '+') {
      result += Number(tokens[i + 1]);
    } else {
      result -= Number(tokens[i + 1]);
    }
  }
  return result;
}

console.log(solution('3 + 4'));
console.log(solution('3 + 4 + 5'));
