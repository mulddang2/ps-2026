/** NOTE:
 * [x] 불필요한 객체 및 메모리 할당 정리 -- x.toString()
 * [x] 불필요한 삼항 연산자 -- x % sum === 0 ? 은 비교 연산 결과가 이미 true/false 이므로 return x % sum === 0 으로 수정해보기
 */
function solution(x) {
  let sum = 0;
  let temp = x;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  return x % sum === 0;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
