function solution(cipher, code) {
  let result = '';

  for (let i = code - 1; i < cipher.length; i += code) {
    result += cipher[i];
  }

  return result;
}

console.log(solution('dfjardstddetckdaccccdegk', 4));
console.log(solution('pfqallllabwaoclk', 2));
