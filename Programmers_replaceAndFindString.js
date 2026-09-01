function solution(myString, pat) {
  const transStr = [...myString].map((v) => (v === 'A' ? 'B' : 'A')).join('');
  return transStr.includes(pat) ? 1 : 0;
}

console.log(solution('ABBAA', 'AABB'));
console.log(solution('ABAB', 'ABAB'));