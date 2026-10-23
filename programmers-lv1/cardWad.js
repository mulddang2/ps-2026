/** NOTE:
 * [x] 명시적인 경계조건 추가 -- 인덱스 오버플로우 문제: pointer1 < cards1.length 추가
 */
function solution(cards1, cards2, goal) {
  // cards1의 현재위치 변수
  let pointer1 = 0;

  // cards2의 현재위치 변수
  let pointer2 = 0;

  //goal 전체 순회 -- 처음부터 끝까지 순회하면서, 매순간 goal의 현재단어가 cards1/cards2 중 맨 앞 단어랑 일치하는게 뭔지 확인
  for (const word of goal) {
    if (pointer1 < cards1.length && cards1[pointer1] === word) {
      pointer1++;
    } else if (pointer2 < cards2.length && cards2[pointer2] === word)
      pointer2++;
    else return 'No';
  }
  return 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water'],
  ),
);
// console.log(
//   solution(
//     ['i', 'water', 'drink'],
//     ['want', 'to'],
//     ['i', 'want', 'to', 'drink', 'water'],
//   ),
