function solution(q, r, code) {
  const result = [];
  [...code].map((v, i) => {
    if (i % q === r) result.push(v);
  });
  return result.join('');
}
