function solution(s) {
  const alphabetArr = new Int32Array(26).fill(-1);
  const result = new Array(s.length).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - 97;

    result[i] = alphabetArr[code] === -1 ? -1 : i - alphabetArr[code];
    alphabetArr[code] = i;
  }
  return result;
}

console.log(solution('banana'));
console.log(solution('foobar'));
