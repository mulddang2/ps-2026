function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n));
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
