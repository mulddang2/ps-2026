function solution(intStrs, k, s, l) {
  const result = [];
  for (let i = 0; i < intStrs.length; i++) {
    const sliced = Number(intStrs[i].slice(s, s + l))
    if (sliced > k) {
      result.push(sliced)
    }
  }
  return result;
}

console.log(solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5))