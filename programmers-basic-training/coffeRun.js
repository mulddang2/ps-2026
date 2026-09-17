/** NOTE:
 * [x] 문자열 조건 최소화하기 -- anything과 americano가 동일한 가격 구조를 가지기 때문에, 차이가 나은 'latte' 조건 하나로만 분기 로직 단축하기
 * [x] 기본 루프문 활용으로 실행 속도 최적화하기
 *
 */
function solution(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i].includes('latte')) {
      total += 5000;
    } else {
      total += 4500;
    }
  }
  return total;
}

console.log(
  solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything']),
);
console.log(solution(['americanoice', 'americano', 'iceamericano']));
