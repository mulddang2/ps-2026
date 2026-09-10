function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common.at(-1) + (common[1] - common[0])
    : common.at(-1) * (common[1] / common[0]);
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
