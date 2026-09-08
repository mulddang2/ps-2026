function solution(arr) {
  const col = arr[0].length; 
  const row = arr.length; 

  if (row > col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row - col; j++) {
        arr[i].push(0);
      }
    }
  } else if (col > row) {
    for (let i = 0; i < col - row; i++) {
      arr.push(new Array(col).fill(0));
    }
  }
  return arr;
}
console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ]),
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ]),
);
console.log(
  solution([
    [1, 2],
    [3, 4],
  ]),
);
