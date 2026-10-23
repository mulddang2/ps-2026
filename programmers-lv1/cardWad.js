function solution(cards1, cards2, goal) {
  // cards1의 현재위치 변수
  let cards1Idx = 0;

  // cards2의 현재위치 변수
  let cards2Idx = 0;

  //goal 전체 순회 -- 처음부터 끝까지 순회하면서, 매순간 goal의 현재단어가 cards1/cards2 중 맨 앞 단어랑 일치하는게 뭔지 확인
  for (let i = 0; i < goal.length; i++) {
    if (cards1[cards1Idx] === goal[i]) {
      cards1Idx++;
    } else if (cards2[cards2Idx] === goal[i]) cards2Idx++;
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
