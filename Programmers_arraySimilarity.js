function solution(s1, s2) {
  let result = 0;

  for (const s2v of s2) {
    s1.includes(s2v) ? result++ : result;
  }
  return result;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));