/** NOTE:
 * [x] 배열 구조 분해 할당 활용하기
 */
function solution(my_string, num1, num2) {
  const arr = [...my_string];
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join('');
}

console.log(solution('hello', 1, 2));
console.log(solution('I love you', 3, 6));
