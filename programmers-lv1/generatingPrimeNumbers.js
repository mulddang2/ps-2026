/** NOTE:
 * [x] 소수 판별 로직 분리하기
 * [x] 연산 방식 최적화 (Math.sqrt() -> i * i <= num) 으로 부동소수점 연산 오차 줄이기
 * [x] 배열 길이 캐싱하기
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) count++;
      }
    }
  }
  return count;
}

// console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
