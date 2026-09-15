function solution(array, n) {
  const diffArr = array.map((v) => Math.abs(n - v));
  const closetNumIdx = diffArr.indexOf(Math.min(...diffArr));

  return array[closetNumIdx];
}

console.log(solution([14, 10], 12));
console.log(solution([4, 6, 4, 4], 7));
console.log(solution([10, 11, 12], 13));
