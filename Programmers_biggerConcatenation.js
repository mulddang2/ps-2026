// FIXME: Math.max에 문자열을 그대로 넘기는 것이 문제다. 코드만 봤을 때, 문자열을 비교하는 건가? 라는 식으로 오해를 불러일으킨다. (문제: 암묵적 형변환)
// function solution(a, b) {
//     return Math.max(`${a}${b}`, `${b}${a}`);
// }

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

console.log(solution(9, 91)); // 991
console.log(solution(999, 19)); // 99919
