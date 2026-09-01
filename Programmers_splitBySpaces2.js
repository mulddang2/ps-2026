function solution(my_string) {
  return my_string.split(' ').filter((v) => v.trim());
}

console.log(solution(' i    love  you'));
console.log(solution('    programmers  '));
