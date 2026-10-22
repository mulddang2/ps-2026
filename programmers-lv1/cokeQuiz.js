/** NOTE:
 * [x] 불필요하게 복잡한 변수 사용 -- 여러변수를 나눠 관리하다보니 로직이 복잡하고, 디버깅 시간 길어짐..
 * [x] 무의미한 연산 및 잠재적 오류 있음 
 */
function solution(a, b, n) {
  
  let answer = 0;

  while(n >= a) {
    const newCoke = Math.floor(n / a) * b;
    answer += newCoke;
    n = newCoke + (n % a);
  }
  return answer;
}

// console.log(solution(2, 1, 20));
// console.log(solution(3, 1, 20));
// console.log(solution(7, 2, 25));
