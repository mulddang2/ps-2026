function solution(myString) {
  return [...myString]
    .map((str, i) => (str < 'l' ? str.replace(str, 'l') : str))
    .join('');
}

console.log(solution('abcdevwxyz'));
console.log(solution('jjnnllkkmm'));
