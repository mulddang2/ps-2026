function solution(s) {
  const unicodeArr = [...s].map((v) => v.charCodeAt()).sort((a, b) => b - a);

  return unicodeArr.map((v) => String.fromCharCode(v)).join('');
}

console.log(solution('Zbcdefg'));
