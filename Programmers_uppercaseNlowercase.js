function solution(my_string) {
  let result = [...my_string];
  result.map((v, i) => {
    if (v.charCodeAt() < 97) {
      result[i] = v.toLowerCase();
    } else {
      result[i] = v.toUpperCase();
    }
  });
  return result.join('');
}

console.log(solution('cccCCC'));
console.log(solution('abCdEfghIJ'));
