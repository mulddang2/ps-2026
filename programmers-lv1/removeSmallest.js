function solution(arr) {
  const minNum = Math.min(...arr);

  const result = arr.filter((v) => v !== minNum);

  return result.length !== 0 ? result : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
