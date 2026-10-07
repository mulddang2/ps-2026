function solution(my_string, letter) {
  return my_string
    .split('')
    .map((v) => (v === letter ? '' : v))
    .join('');
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
