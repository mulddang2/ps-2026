function solution(my_string) {
  return (my_string.match(/\d/g) || [])
    .sort((a, b) => a - b)
    .map((v) => Number(v));
}

console.log(solution('hi12392'));
console.log(solution('p2o4i8gj2'));
console.log(solution('abcde0'));
