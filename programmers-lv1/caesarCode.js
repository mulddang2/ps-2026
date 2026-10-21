function solution(s, n) {
  const result = [];

  [...s].map((char) => {
    if (char === 'z' || char === 'Z') {
      result.push(String.fromCharCode(char.charCodeAt() - 26 + n));
    } else {
      if (char === ' ') result.push(' ');
      else result.push(String.fromCharCode(char.charCodeAt() + n));
    }
  });

  return result.join('');
}

console.log(solution('Z', 25));
console.log(solution('z', 25));
console.log(solution('a', 25));
console.log(solution('a     B     z', 4));
