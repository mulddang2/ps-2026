function solution(s) {
  let result = '';
  let chunk = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') chunk = -1;
    else chunk++;

    if (chunk % 2 === 0) result += s[i].toUpperCase();
    else result += s[i].toLowerCase();
  }
  return result;
}

console.log(solution('try hello world'));
console.log(solution('tryy Ehello world'));
