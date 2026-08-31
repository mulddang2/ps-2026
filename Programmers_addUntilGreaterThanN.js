/** NOTE:
 * [x] 아무 동작도 하지 않는 불필요한 구문(else sum;) 제거하기
 * [x] 정답을 찾은 즉시 남은 배열 순회를 멈추도록 조기 종료(return 또는 break) 적용하기
 */

function solution(numbers, n) {
  //   let sum = 0;

  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //     if (sum > n) {
  //       return sum;
  //     }
  //   }
  //   return sum;

  // [x] 인덱스가 필요 없는 배열 순회 시 for...of 문을 활용하여 가독성 높이기
  //   for (const num of numbers) {
  //     sum += num;
  //     if (sum > n) return sum;
  //   }

  // [x] reduce 활용
  return numbers.reduce((sum, current) => {
    return sum > n ? sum : sum + current;
  }, 0);
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
