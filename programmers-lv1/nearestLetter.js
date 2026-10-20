function solution(s) {
  const alphabetArr = new Int32Array(26).fill(-1);
  const result = new Array(s.length).fill(-1);

  for (let i = 0; i < s.length; i++) {
    if (alphabetArr[s[i].charCodeAt() - 97] !== -1) {
      result[i] = i - alphabetArr[s[i].charCodeAt() - 97];
      alphabetArr[s[i].charCodeAt() - 97] = i;
    } else {
      alphabetArr[s[i].charCodeAt() - 97] = i;
    }
  }
  return result;
}

console.log(solution('banana'));
console.log(solution('foobar'));
