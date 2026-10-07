/** NOTE:
 * [x] 각 자리수가 0-9까지만 가능하기 때문에 a-j까지 매핑가능
 */
function solution(age) {
  const alpha = 'abcdefghij';
  return String(age)
    .split('')
    .map((digit) => alpha[digit])
    .join('');
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
