function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; end_num <= i; i--) {
    result.push(i);
  }
  return result;
}

console.log(solution(10, 3))
