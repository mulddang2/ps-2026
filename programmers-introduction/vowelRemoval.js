function solution(my_string) {
  const pattern = /a|e|i|o|u/g;
  return my_string.replace(pattern, '');
}

console.log(solution('bus'));
console.log(solution('nice to meet you'));
