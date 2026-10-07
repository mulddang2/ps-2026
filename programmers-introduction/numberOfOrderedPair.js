/** NOTE:
 * [x] 제곱수까지만 탐색하여 개선
 */
function solution(n) {
  let count = 0;
  
  // 1. i * i <= n 조건으로 탐색 범위를 sqrt(n) 이하로 제한
  for(let i = 1; i * i <= n; i++) {

    // 2. i가 n의 약수인지 확인
    if(n % i === 0) {
      // 3. i가 정확히 n의 제곱근인 경우
      if (i * i === n) {
        count += 1;
      }
      // i와 대칭되는 다른 약수가 존재하는 경우
      else {
        count += 2; // 서로 다른 2개의 순서쌍 
      }
    }
    
  }
  return count;
}

console.log(solution(20))
console.log(solution(100))