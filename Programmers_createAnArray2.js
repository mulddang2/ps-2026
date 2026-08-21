function solution(l, r) {
  const answer = [];
  for (let i = 1; ; i++) {
    let binaryStr = i.toString(2);
    let replacedStr = binaryStr.replaceAll('1', '5');
    let num = Number(replacedStr);

    if (num > r) break;
    if (num > l) {
      answer.push(num)
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(5, 555))
console.log(solution(10, 20))