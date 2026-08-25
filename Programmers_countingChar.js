function solution(my_string) {
  const result = new Array(52).fill(0);

  [...my_string].forEach((v) => {
    if (v === v.toUpperCase()) {
      result[v.charCodeAt() - 65] += 1;
    } else result[v.charCodeAt() - 97 + 26] += 1;
  });
  return result;
}

console.log(solution('Programmers'));
