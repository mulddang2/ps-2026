function solution(rsp) {
  const winMap = { 2: '0', 0: '5', 5: '2' };
  let answer = '';

  for (const char of rsp) {
    answer += winMap[char];
  }

  return answer;
}

console.log(solution('2'));
console.log(solution('205'));
