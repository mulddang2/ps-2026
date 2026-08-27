function solution(arr, query) {
  let numArr = [...arr];
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      numArr = numArr.slice(0, query[i] + 1);
    } else {
      if (query[i] !== 0 && query[i] < numArr.length) {
        numArr = numArr.slice(query[i]);
      }
    }
  }
  return numArr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
console.log(
  solution([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [8, 2, 4, 1]),
);
