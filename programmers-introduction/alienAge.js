function solution(age) {
  let result = '';

  const char = String(age);
  
  for (let i = 0; i < char.length; i++) {
    const ascii = Number(char.slice(i, i + 1)) + 97;
    result += String.fromCharCode(ascii);
  }
  return result;
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
