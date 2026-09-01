function solution(binomial) {
  const separator = binomial.split(' ');

  switch (separator[1]) {
    case '+':
      return Number(separator[0]) + Number(separator[2]);
    case '-':
      return Number(separator[0]) - Number(separator[2]);
    case '*':
      return Number(separator[0] * Number(separator[2]));
  }
}

console.log(solution('43 + 12'));
console.log(solution('0 - 7777'));
console.log(solution('40000 * 40000'));
