/** NOTE:
 * [x] 변수명이 의미와 반대. -- 문제에서 첫 원소는 1번째이기 때문에, 인덱스 기준임을 변경하기
 * [x] reduce에 초기값이 없다.
 * [x] 중간 배열이 불필요하다. -- 두 개의 합만 필요한데, 배열 2개를 만들고 다시 순회하고 있다.
 * [x] forEach + push 대신 누적(reduce/for)으로 변경해보기
 */

function solution(num_list) {
  // const evenArr = [];
  // const oddArr = [];
  // num_list.forEach((v, i) => (i % 2 === 0 ? evenArr.push(v) : oddArr.push(v)));

  // return Math.max(
  //   evenArr.reduce((acc, cur) => acc + cur),
  //   oddArr.reduce((acc, cur) => acc + cur),
  // );

  // reduce 한개로 활용
  const [oddSum, evenSum] = num_list.reduce(
    ([odd, even], v, i) => (i % 2 === 0 ? [odd + v, even] : [odd, even + v]),
    [0, 0],
  );

  return Math.max(oddSum, evenSum);
}
