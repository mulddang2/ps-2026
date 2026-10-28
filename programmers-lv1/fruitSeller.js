/** NOTE:
 * [x] slice와 Math.min 제거하고 정렬된 배열의 인덱스를 직접 참조해서 메모리 사용량 최소화 하기
 */
function solution(k, m, score) {
  // 1. 내림차순 정렬
  score.sort((a, b) => b - a);

  let price = 0;

  // 2. m개 단위로 건너뛰며 상자의 마지막 원소(최솟값) 바로 참조
  for (let i = m - 1; i < score.length; i += m) {
    price += score[i] * m;
  }

  return price;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
