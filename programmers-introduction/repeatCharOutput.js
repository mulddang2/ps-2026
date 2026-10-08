function solution(my_string, n) {
  return [...my_string].map(v => v.repeat(n)).join('');
}

console.log(solution('hello', 3));
