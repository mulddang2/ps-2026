/** NOTE: 그리디 알고리즘 문제!!
 * "가장 많은 부서를 지원하려면 어떤부서부터 예산을 지급해야할까?"
 * - 최대한 많은 부서 지원하려면, 신청 금액이 적은 부터 우선 지원
 * [x] for...of 활용해서 가독성 높이기, 예산부족 시 break
 *
 */

function solution(d, budget) {
  // 배열 d 오름차순 정렬 (신청 금액 적은 것 부터 찾기 위함)
  let count = 0;
  const sorted = [...d].sort((a, b) => a - b);

  for (const cost of sorted) {
    if (budget < cost) break;
    budget -= cost;
    count++;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
