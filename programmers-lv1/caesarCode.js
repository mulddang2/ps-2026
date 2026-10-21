function solution(s, n) {
  return [...s]
    .map((char) => {
      if (char === ' ') return ' ';

      const code = char.charCodeAt();

      // 소문자
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }

      // 대문자
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      }

      return char;
    })
    .join('');
}

console.log(solution('Y', 25));
console.log(solution('z', 25));
console.log(solution('a', 25));
console.log(solution('a     B     z', 4));
