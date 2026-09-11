function solution(my_string) {
  let result = '';
  for (const s of my_string) {
    result += s.toLowerCase();
  }
  return [...result].sort().join('');
}

console.log(solution('Bcad'));
console.log(solution('heLLo'));
console.log(solution('Python'));
