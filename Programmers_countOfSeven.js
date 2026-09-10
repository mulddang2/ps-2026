function solution(array) {
  const strArr = array.toString();
  let count = 0;
  for (const str of strArr) {
    if (str === '7') count++;
  }
  return count;
}

console.log(solution([7, 77, 17]));
console.log(solution(10, 29));
