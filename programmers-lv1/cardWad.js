function solution(cards1, cards2, goal) {
  const result = [];
  let i = 0;
  while (goal[i] === cards1[i]) {
    result.push(cards1[i]);
    i++;
  }
  result.push(cards2);
  result.push(cards1.slice(i));

  return result.flat().every((v, i) => v === goal[i]) ? 'Yes' : 'No';
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
