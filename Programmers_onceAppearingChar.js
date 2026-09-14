function solution(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      result.push(s[i]);
    }
  }
  return result.sort().join('');
}

console.log(solution('abcabcadc'));
console.log(solution('abdc'));
console.log(solution('hello'));
