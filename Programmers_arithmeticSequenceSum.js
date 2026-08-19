function solution(a, d, included) {
  return [...included.keys()]
    .filter((i) => included[i])
    .reduce((acc, i) => acc + a + d * i, 0);
}

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
