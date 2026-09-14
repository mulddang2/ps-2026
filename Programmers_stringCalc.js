function solution(my_string) {
  const split = my_string.split(' ');

  let result = +split[0];

  for (let i = 1; i < split.length; i++) {
    if (split[i] === '+' || split[i] ==='-') {
      if (split[i] === '+') {
        result += +split[i + 1];
      } else {
        result -= +split[i + 1];
      }
    }
  }
  return result;
}

console.log(solution('3 + 4'));
console.log(solution('3 + 4 + 5'));
