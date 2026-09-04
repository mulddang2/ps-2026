function solution(picture, k) {
  const result = [];

  for (let i = 0; i < picture.length; i++) {
    const expandedRow = picture[i]
      .split('')
      .map((char) => char.repeat(k))
      .join('');

    for (let j = 0; j < k; j++) {
      result.push(expandedRow);
    }
  }
  return result;
}

console.log(
  solution(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2,
  ),
);
console.log(solution(['x.x', '.x.', 'x.x'], 3));
