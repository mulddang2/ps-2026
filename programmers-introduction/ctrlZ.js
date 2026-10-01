function solution(s) {
  const strArr = s.split(' ');
  const stack = [];
  strArr.forEach((v, i) => {
    stack.push(Number(v));
    if (v === 'Z') {
      stack.pop();
      stack.pop();
    }
  });
  return stack.reduce((acc, cur) => acc + cur, 0) || 0;
}
console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));
console.log(solution('10 Z 20 Z 1'));
console.log(solution('10 Z 20 Z'));
console.log(solution('-1 -2 -3 Z'));
