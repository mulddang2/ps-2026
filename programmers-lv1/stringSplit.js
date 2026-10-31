function solution(s) {
  let charCount = 0;
  let diffCount = 0;
  let char = '';
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (char === '') {
      char = s[i];
    }
    if (char === s[i]) {
      charCount++;
    } else {
      diffCount++;
    }

    if (charCount === diffCount) {
      result++;
      char = '';
      charCount = 0;
      diffCount = 0;
    }
    // 더 읽을 글자가 없을 때
    if (charCount !== diffCount && i === s.length - 1) {
      result++;
    }
  }
  return result;
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
