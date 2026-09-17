function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

console.log(solution('AbCdEfG', 'aBc'));
console.log(solution('aaAA', 'aaaaa'));
