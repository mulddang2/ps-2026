/** NOTE:
 * [x] 조건문 중복 검사 구조 개선 (count 500 체크하는 부분)
 */
function solution(num) {
  let count = 0;
  
  while (num !== 1) {
    if (count >= 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }
  // num === 1 인 경우 while 루프 실행되지 않고, count(0) 반환
  return count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
