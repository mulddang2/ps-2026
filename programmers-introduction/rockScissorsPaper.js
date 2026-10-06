function solution(rsp) {
  const result = rsp.replaceAll(/2|0|5/g, (match) => {
    if (match === '2') return '0';
    if (match === '0') return '5';
    if (match === '5') return '2';
  });

  return result;
}

console.log(solution('2'));
console.log(solution('205'));
